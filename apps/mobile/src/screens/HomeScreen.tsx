import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icons, colors } from '@koru/ui';
import { MenuBar } from '../components/MenuBar';
import { SearchBar } from '../components/SearchBar';
import { StudyBlock } from '../components/StudyBlock';

export const HomeScreen = () => {
  return (
    <View className="flex-1 bg-bg2-primary">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <View className="flex-row items-center gap-2">
           <Icons.Logo width={32} height={32} color={colors.label.primary} />
           <Text className="font-logo text-logo text-label-primary">koru</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Settings Pressed')}>
          <Icons.Settings width={24} height={24} color={colors.label.primary} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="px-4 py-2">
        <SearchBar onPress={() => console.log('Search Pressed')} />
      </View>

      {/* Study Block */}
      <View className="px-4 py-2">
        <StudyBlock onStudyPress={() => console.log('Study Pressed')} />
      </View>

      {/* Main Content Area */}
      <View className="flex-1 px-4 py-4">
        <Text className="text-label-primary text-2xl font-bold mb-4">Home</Text>
        <Text className="text-label-secondary">Your notes and folders will appear here.</Text>
      </View>

      {/* Bottom MenuBar */}
      <MenuBar 
        className="w-full"
        onFolderAddPress={() => console.log('Add Folder Pressed')}
        onNoteAddPress={() => console.log('Add Note Pressed')}
      />
    </View>
  );
};
