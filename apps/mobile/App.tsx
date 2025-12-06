import './global.css';
import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

