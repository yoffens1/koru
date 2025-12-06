import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icons } from '../../assets';

interface MenuBarProps {
  className?: string;
  onFolderAddPress?: () => void;
  onNoteAddPress?: () => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({ 
  className,
  onFolderAddPress,
  onNoteAddPress 
}) => {
  return (
    <View className={`flex-row items-center justify-between px-6 py-4 bg-bg2-primary border-t border-bg2-stroke ${className}`}>
      <TouchableOpacity 
        onPress={onFolderAddPress}
        className="p-2 active:opacity-70"
      >
        <Icons.FolderAdd 
          width={24} 
          height={24} 
          color="#C586C0" // accent color
        />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={onNoteAddPress}
        className="p-2 active:opacity-70"
      >
        <Icons.AddNote 
          width={24} 
          height={24} 
          color="#C586C0" // accent color
        />
      </TouchableOpacity>
    </View>
  );
};
