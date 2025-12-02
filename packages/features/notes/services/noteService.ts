import { getDatabase } from '@koru/db';
import { v4 as uuidv4 } from 'uuid';
import { CreateNoteDTO, Note, UpdateNoteDTO } from './types';

export const NoteService = {
  async getAllNotes(): Promise<Note[]> {
    const db = await getDatabase();
    const notes = await db.notes.find().exec();
    return notes.map(doc => doc.toJSON());
  },

  async createNote(data: CreateNoteDTO): Promise<Note> {
    const db = await getDatabase();
    const now = new Date().toISOString();
    const newNote: Note = {
      id: uuidv4(),
      title: data.title,
      content: data.content,
      tags: data.tags || [],
      createdAt: now,
      updatedAt: now,
      isArchived: false,
    };
    const doc = await db.notes.insert(newNote);
    return doc.toJSON();
  },

  async updateNote(data: UpdateNoteDTO): Promise<Note> {
    const db = await getDatabase();
    const doc = await db.notes.findOne(data.id).exec();
    if (!doc) throw new Error('Note not found');
    
    const updateData: Partial<Note> = {
        ...data,
        updatedAt: new Date().toISOString()
    };
    
    // Remove undefined fields
    Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

    await doc.patch(updateData);
    return doc.toJSON();
  },

  async deleteNote(id: string): Promise<void> {
    const db = await getDatabase();
    const doc = await db.notes.findOne(id).exec();
    if (doc) {
      await doc.remove();
    }
  }
};
