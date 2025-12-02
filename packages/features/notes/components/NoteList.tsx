import React from 'react'
import { YStack, Text, Button, Card, XStack } from 'tamagui'
import { Note } from '@koru/db'
import { useNotes } from '../logic/useNotes'
import { Database } from '@nozbe/watermelondb'

interface NoteListProps {
  database: Database
}

export const NoteList: React.FC<NoteListProps> = ({ database }) => {
  const { notes, createNote } = useNotes(database)

  return (
    <YStack padding="$4" space="$4">
      <XStack justifyContent="space-between" alignItems="center">
        <Text fontSize="$6" fontWeight="bold">My Notes</Text>
        <Button onPress={() => createNote('New Note', 'Start writing...')}>
          Add Note
        </Button>
      </XStack>

      <YStack space="$2">
        {notes.map(note => (
          <Card key={note.id} bordered padding="$3">
            <Text fontSize="$4" fontWeight="bold">{note.title}</Text>
            <Text numberOfLines={2}>{note.content}</Text>
          </Card>
        ))}
      </YStack>
    </YStack>
  )
}
