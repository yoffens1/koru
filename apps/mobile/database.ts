import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import { schema, Note, Flashcard } from '@koru/db'

const adapter = new SQLiteAdapter({
  schema,
  jsi: true,
  onSetUpError: error => {
    console.error('Database failed to load', error)
  }
})

export const database = new Database({
  adapter,
  modelClasses: [Note, Flashcard],
})
