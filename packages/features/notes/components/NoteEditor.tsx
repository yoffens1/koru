import React from 'react'
import { YStack, XStack, Text, Button, TextArea, H4 } from 'tamagui'
import { ArrowLeft, Check, ArrowRight, Box, Hash, Bold, Italic, Image as ImageIcon } from '@koru/ui'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, Platform } from 'react-native'

interface NoteEditorProps {
  onBack: () => void
  onSave: () => void
}

export const NoteEditor: React.FC<NoteEditorProps> = ({ onBack, onSave }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <YStack f={1} bg="$background" padding="$4" space="$4">
        
        {/* Header */}
        <XStack justifyContent="space-between" alignItems="center">
          <XStack alignItems="center" space="$2">
             <Button size="$3" icon={ArrowLeft} circular chromeless onPress={onBack} />
             <Text fontWeight="bold" fontSize="$5">koru</Text>
          </XStack>
          
          <XStack alignItems="center" space="$2">
             <Text color="$pink10" fontSize="$2">FRONT VIEW</Text>
             <XStack space="$2">
                <Button size="$2" icon={ArrowLeft} circular chromeless />
                <Button size="$2" icon={ArrowRight} circular chromeless />
             </XStack>
             <Button size="$3" onPress={onSave} chromeless>Done</Button>
          </XStack>
        </XStack>

        {/* Content */}
        <YStack f={1} space="$2">
          <H4 fontWeight="bold">Python</H4>
          <TextArea 
             f={1} 
             bg="transparent" 
             borderWidth={0} 
             placeholder="Start typing..." 
             fontSize="$4"
             color="$color"
             focusStyle={{ borderWidth: 0 }}
          />
        </YStack>

        {/* Toolbar (Above Keyboard) */}
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <XStack bg="$gray3" padding="$2" borderRadius="$4" justifyContent="space-around">
             <Button size="$3" icon={Box} circular chromeless />
             <Button size="$3" icon={Hash} circular chromeless />
             <Button size="$3" icon={Bold} circular chromeless />
             <Button size="$3" icon={Italic} circular chromeless />
             <Button size="$3" icon={ImageIcon} circular chromeless />
          </XStack>
        </KeyboardAvoidingView>

      </YStack>
    </SafeAreaView>
  )
}
