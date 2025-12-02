import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import { schema } from './schema'
import { Note, Flashcard } from './models'

// Note: specific adapter setup (native vs web) usually happens in the app entry point
// but we export the class types and schema here.

export * from './schema'
export * from './models'
