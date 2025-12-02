import { createRxDatabase, RxCollection, RxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'; // Web default
import { FlashcardDocType, flashcardSchema, NoteDocType, noteSchema } from './schema';

// Define the Database Collections
export type MyDatabaseCollections = {
  notes: RxCollection<NoteDocType>;
  flashcards: RxCollection<FlashcardDocType>;
};

export type MyDatabase = RxDatabase<MyDatabaseCollections>;

let dbPromise: Promise<MyDatabase> | null = null;

export const createDatabase = async (): Promise<MyDatabase> => {
  if (dbPromise) return dbPromise;

  // In a real app, we would switch storage based on platform (SQLite for Native, Dexie for Web)
  // For scaffolding, we use Dexie (IndexedDB) as a default or mock.
  
  const db = await createRxDatabase<MyDatabaseCollections>({
    name: 'korudb',
    storage: getRxStorageDexie(),
  });

  await db.addCollections({
    notes: {
      schema: noteSchema,
    },
    flashcards: {
      schema: flashcardSchema,
    },
  });

  return db;
};

export const getDatabase = () => {
    if (!dbPromise) dbPromise = createDatabase();
    return dbPromise;
};
