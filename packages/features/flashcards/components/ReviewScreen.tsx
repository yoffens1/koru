import React, { useState } from 'react'
import { YStack, XStack, Text, Button, Card, Image, Progress, H2 } from 'tamagui'
import { ArrowLeft, MoreHorizontal, Volume2, Edit3 } from '@koru/ui'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ReviewScreen = ({ onBack }: { onBack: () => void }) => {
  const [flipped, setFlipped] = useState(false)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <YStack f={1} bg="$background" padding="$4" space="$4">
        {/* Header */}
        <XStack justifyContent="space-between" alignItems="center">
          <Button size="$3" circular icon={ArrowLeft} onPress={onBack} chromeless />
          <Text fontSize="$5" fontWeight="bold">English Words</Text>
          <Button size="$3" circular icon={MoreHorizontal} chromeless />
        </XStack>

        {/* Progress Bar */}
        <XStack space="$1" height={4}>
          {[1, 2, 3, 4, 5].map((i) => (
            <YStack key={i} f={1} bg={i <= 2 ? '$color' : '$gray5'} borderRadius="$1" />
          ))}
        </XStack>

        {/* Flashcard */}
        <Card f={1} bordered elevate padding="$0" overflow="hidden" onPress={() => setFlipped(!flipped)}>
          <YStack f={1} bg="$gray3" padding="$5" space="$4" justifyContent="center" alignItems="center">
             {!flipped ? (
               <>
                  <XStack w="100%" justifyContent="space-between">
                    <Text fontSize="$3" color="$gray10">FRONT</Text>
                    <Button size="$2" icon={Edit3} circular chromeless />
                  </XStack>
                  
                  <YStack alignItems="center" space="$2">
                    <XStack alignItems="center" space="$2">
                      <H2>Chair</H2>
                      <Volume2 size={20} color="$gray10" />
                    </XStack>
                    <Text textAlign="center" color="$gray10">
                      Just cuz the music stops, doesn't mean you got to sit in the closest chair
                    </Text>
                  </YStack>

                  {/* Placeholder Image */}
                  <YStack width={200} height={200} bg="$gray8" borderRadius="$4" alignItems="center" justifyContent="center">
                    <Text>🪑</Text>
                  </YStack>
               </>
             ) : (
               <YStack f={1} justifyContent="center" alignItems="center">
                  <Text fontSize="$3" color="$gray10">BACK</Text>
                  <H2>Стул</H2>
               </YStack>
             )}
          </YStack>
        </Card>

        {/* Action Buttons */}
        <XStack space="$3" justifyContent="center">
           <Button bg="$yellow9" color="black" borderRadius="$10" size="$4">😐 10 min</Button>
           <Button bg="$orange9" color="black" borderRadius="$10" size="$4">😐 1 day</Button>
           <Button bg="$yellow9" color="black" borderRadius="$10" size="$4">😐 3 days</Button>
        </XStack>
      </YStack>
    </SafeAreaView>
  )
}
