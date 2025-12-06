import './global.css';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, ActivityIndicator } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { useFonts, Quintessential_400Regular } from '@expo-google-fonts/quintessential';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Quintessential_400Regular,
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-bg2-primary">
        <ActivityIndicator size="large" color="#C586C0" />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-bg2-primary">
      <StatusBar style="light" backgroundColor="#0B0B0E" />
      <HomeScreen />
    </SafeAreaView>
  );
}

