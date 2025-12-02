import React, { useState } from 'react'
import { YStack, XStack, Text, Button, Input, ScrollView, H2, Avatar } from 'tamagui'
import { Folder, FileText, Plus, Settings, Search, Play } from '@koru/ui'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Database } from '@nozbe/watermelondb'
import { NoteList } from './NoteList' // Reusing existing list logic if needed

interface HomeScreenProps {
  database: Database
  onStudyPress: () => void
  onNotePress: (id: string) => void
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ database, onStudyPress, onNotePress }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack f={1} padding="$4" space="$4" bg="$background">
        
        {/* Header */}
        <XStack justifyContent="space-between" alignItems="center">
          <XStack alignItems="center" space="$2">
            <Text fontSize="$8" fontWeight="bold">koru</Text>
          </XStack>
          <Button icon={Settings} circular chromeless />
        </XStack>

        {/* Search */}
        <XStack bg="$gray3" borderRadius="$10" paddingHorizontal="$3" alignItems="center" height={50}>
          <Search size={20} color="$gray10" />
          <Input 
            f={1} 
            bg="transparent" 
            borderWidth={0} 
            placeholder="Search or tell AI" 
            placeholderTextColor="$gray10"
          />
        </XStack>

        {/* Stats & Study */}
        <XStack space="$3">
          <YStack f={1} bg="$gray3" borderRadius="$4" padding="$3" justifyContent="center">
            <Text color="$gray10">Total: 9999</Text>
            <Text color="$pink10">Due Today: 92</Text>
          </YStack>
          <Button 
            bg="$pink10" 
            width={100} 
            height={80} 
            icon={<Play size={24} color="white" />} 
            flexDirection="column"
            onPress={onStudyPress}
          >
            <Text color="white" fontWeight="bold">Study</Text>
          </Button>
        </XStack>

        <ScrollView showsVerticalScrollIndicator={false}>
          <YStack space="$5">
            
            {/* Folders Section */}
            <YStack space="$2">
              <XStack alignItems="center" space="$2">
                <Text fontWeight="bold" fontSize="$5">Folders</Text>
              </XStack>
              <YStack space="$2">
                {[1, 2, 3].map(i => (
                  <XStack key={i} bg="$gray2" padding="$3" borderRadius="$3" alignItems="center" justifyContent="space-between">
                    <XStack space="$2" alignItems="center">
                      <Folder size={20} color="$gray10" />
                      <Text>Note number {i}</Text>
                    </XStack>
                    <Text color="$gray9" fontSize="$2">yesterday</Text>
                  </XStack>
                ))}
              </YStack>
            </YStack>

            {/* Notes Section */}
            <YStack space="$2">
              <XStack alignItems="center" space="$2">
                <Text fontWeight="bold" fontSize="$5">Notes</Text>
              </XStack>
              <YStack space="$2">
                {[1, 2, 3, 4].map(i => (
                  <XStack key={i} bg="$gray2" padding="$3" borderRadius="$3" alignItems="center" justifyContent="space-between" onPress={() => onNotePress(i.toString())}>
                    <XStack space="$2" alignItems="center">
                      <FileText size={20} color="$gray10" />
                      <Text>Note number {i}</Text>
                    </XStack>
                    <Text color="$gray9" fontSize="$2">yesterday</Text>
                  </XStack>
                ))}
              </YStack>
            </YStack>

          </YStack>
        </ScrollView>

        {/* Floating Action Button */}
        <XStack position="absolute" bottom={20} right={20}>
           <Button icon={Plus} circular size="$5" bg="$pink10" color="white" />
        </XStack>

      </YStack>
    </SafeAreaView>
  )
}
