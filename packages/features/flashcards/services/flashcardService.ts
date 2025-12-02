import { getDatabase } from '@koru/db';
import { v4 as uuidv4 } from 'uuid';
import { CreateFlashcardDTO, Flashcard, Grade } from '../types';

export const FlashcardService = {
  async getDueFlashcards(): Promise<Flashcard[]> {
    const db = await getDatabase();
    const now = new Date().toISOString();
    // Find cards where dueDate <= now
    // Note: In a real RxDB app, you'd want an index on dueDate
    const cards = await db.flashcards.find({
      selector: {
        dueDate: { $lte: now }
      }
    }).exec();
    return cards.map(doc => doc.toJSON());
  },

  async getFlashcardsByNote(noteId: string): Promise<Flashcard[]> {
    const db = await getDatabase();
    const cards = await db.flashcards.find({
      selector: {
        noteId: { $eq: noteId }
      }
    }).exec();
    return cards.map(doc => doc.toJSON());
  },

  async createFlashcard(data: CreateFlashcardDTO): Promise<Flashcard> {
    const db = await getDatabase();
    const now = new Date().toISOString();
    const newCard: Flashcard = {
      id: uuidv4(),
      noteId: data.noteId,
      front: data.front,
      back: data.back,
      interval: 0,
      repetition: 0,
      efactor: 2.5,
      dueDate: now, // Due immediately
      createdAt: now,
    };
    const doc = await db.flashcards.insert(newCard);
    return doc.toJSON();
  },

  async reviewFlashcard(id: string, grade: Grade): Promise<Flashcard> {
    const db = await getDatabase();
    const doc = await db.flashcards.findOne(id).exec();
    if (!doc) throw new Error('Flashcard not found');

    const card = doc.toJSON();
    
    // SM-2 Algorithm Implementation
    let { interval, repetition, efactor } = card;

    if (grade >= 3) {
      if (repetition === 0) {
        interval = 1;
      } else if (repetition === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * efactor);
      }
      repetition += 1;
    } else {
      repetition = 0;
      interval = 1;
    }

    efactor = efactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
    if (efactor < 1.3) efactor = 1.3;

    const nextDueDate = new Date();
    nextDueDate.setDate(nextDueDate.getDate() + interval);

    await doc.patch({
      interval,
      repetition,
      efactor,
      dueDate: nextDueDate.toISOString()
    });

    return doc.toJSON();
  }
};
