import {
    ExtractDocumentTypeFromTypedRxJsonSchema,
    RxJsonSchema,
    toTypedRxJsonSchema
} from 'rxdb';

// --- Note Schema ---

export const NOTE_SCHEMA_LITERAL = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100
    },
    title: {
      type: 'string'
    },
    content: {
      type: 'string' // Markdown content
    },
    tags: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    createdAt: {
      type: 'string',
      format: 'date-time'
    },
    updatedAt: {
      type: 'string',
      format: 'date-time'
    },
    isArchived: {
      type: 'boolean'
    }
  },
  required: ['id', 'title', 'createdAt', 'updatedAt']
} as const;

const schemaTyped = toTypedRxJsonSchema(NOTE_SCHEMA_LITERAL);
export type NoteDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof schemaTyped>;
export const noteSchema: RxJsonSchema<NoteDocType> = NOTE_SCHEMA_LITERAL;


// --- Flashcard Schema ---

export const FLASHCARD_SCHEMA_LITERAL = {
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 100
    },
    noteId: {
      type: 'string', // Reference to the source note
      ref: 'notes'
    },
    front: {
      type: 'string'
    },
    back: {
      type: 'string'
    },
    interval: {
      type: 'number' // SM-2 interval
    },
    repetition: {
      type: 'number' // SM-2 repetition count
    },
    efactor: {
      type: 'number' // SM-2 easiness factor
    },
    dueDate: {
      type: 'string',
      format: 'date-time'
    },
    createdAt: {
      type: 'string',
      format: 'date-time'
    }
  },
  required: ['id', 'front', 'back', 'dueDate']
} as const;

const flashcardSchemaTyped = toTypedRxJsonSchema(FLASHCARD_SCHEMA_LITERAL);
export type FlashcardDocType = ExtractDocumentTypeFromTypedRxJsonSchema<typeof flashcardSchemaTyped>;
export const flashcardSchema: RxJsonSchema<FlashcardDocType> = FLASHCARD_SCHEMA_LITERAL;
