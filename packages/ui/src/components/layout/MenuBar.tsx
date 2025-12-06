import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface MenuBarProps {
  className?: string;
}

export const MenuBar: React.FC<MenuBarProps> = ({ className }) => {
  return (
    <View className={`flex-row bg-white border-t border-gray-200 px-4 py-3 justify-around ${className}`}>
      {/* Example Menu Items */}
      <MenuItem label="Home" active />
      <MenuItem label="Cards" />
      <MenuItem label="Profile" />
    </View>
  );
};

const MenuItem: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
  <TouchableOpacity className="items-center">
    <View className={`w-6 h-6 mb-1 ${active ? 'bg-blue-500' : 'bg-gray-300'} rounded`} />
    <Text className={`text-xs ${active ? 'text-blue-500 font-medium' : 'text-gray-500'}`}>
      {label}
    </Text>
  </TouchableOpacity>
);
