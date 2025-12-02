import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'notes',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'content', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'flashcards',
      columns: [
        { name: 'front', type: 'string' },
        { name: 'back', type: 'string' },
        { name: 'note_id', type: 'string', isIndexed: true },
        { name: 'interval', type: 'number' },
        { name: 'repetition', type: 'number' },
        { name: 'ease_factor', type: 'number' },
        { name: 'next_review_at', type: 'number' },
      ],
    }),
  ],
})
