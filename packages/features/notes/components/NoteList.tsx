import { Button, ScrollView, Text, View } from 'react-native'; // Or 'tamagui'
import { useNotes } from '../hooks/useNotes';

// In a real app, we would import styled components from @koru/ui (Tamagui)
// import { YStack, XStack, H3, Paragraph, Button } from '@koru/ui';

export const NoteList = ({ onSelectNote }: { onSelectNote: (id: string) => void }) => {
  const { data: notes, isLoading, error } = useNotes();

  if (isLoading) return <Text>Loading notes...</Text>;
  if (error) return <Text>Error loading notes</Text>;

  return (
    <ScrollView>
      {notes?.map((note) => (
        <View key={note.id} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{note.title}</Text>
          <Text numberOfLines={2}>{note.content}</Text>
          <Button title="Edit" onPress={() => onSelectNote(note.id)} />
        </View>
      ))}
    </ScrollView>
  );
};
