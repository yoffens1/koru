import { Slot } from 'expo-router'
import { TamaguiProvider, Theme } from 'tamagui'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import config from '../tamagui.config'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) return null

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaProvider>
          <Slot />
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  )
}
