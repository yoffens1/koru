import { useEffect, useState } from 'react'
import { Database } from '@nozbe/watermelondb'
import { Note } from '@koru/db'

export function useNotes(database: Database) {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const notesCollection = database.get<Note>('notes')
    
    // Subscribe to changes
    const subscription = notesCollection.query().observe().subscribe(setNotes)

    return () => subscription.unsubscribe()
  }, [database])

  const createNote = async (title: string, content: string) => {
    await database.write(async () => {
      await database.get<Note>('notes').create(note => {
        note.title = title
        note.content = content
      })
    })
  }

  return { notes, createNote }
}
