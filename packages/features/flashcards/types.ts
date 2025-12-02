import { FlashcardDocType } from '@koru/db/src/schema';

export type Flashcard = FlashcardDocType;

export interface CreateFlashcardDTO {
  noteId: string;
  front: string;
  back: string;
}

export interface UpdateFlashcardDTO {
  id: string;
  front?: string;
  back?: string;
  // SM-2 updates are handled internally by the service usually, but we might want to override
  interval?: number;
  repetition?: number;
  efactor?: number;
  dueDate?: string;
}

export enum Grade {
  AGAIN = 0,
  HARD = 3,
  GOOD = 4,
  EASY = 5,
}
