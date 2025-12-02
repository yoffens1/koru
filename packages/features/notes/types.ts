import { NoteDocType } from '@koru/db/src/schema';

export type Note = NoteDocType;

export interface CreateNoteDTO {
  title: string;
  content: string;
  tags?: string[];
}

export interface UpdateNoteDTO {
  id: string;
  title?: string;
  content?: string;
  tags?: string[];
  isArchived?: boolean;
}
