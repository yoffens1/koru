import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Logo } from '../common/Logo';
import { SearchBar } from '../common/SearchBar';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <View className={`flex-row items-center justify-between px-4 py-2 bg-white border-b border-gray-200 ${className}`}>
      <Logo />
      <View className="flex-1 mx-4 max-w-md">
        <SearchBar />
      </View>
      {/* Placeholder for user profile or actions */}
      <View className="w-8 h-8 bg-gray-200 rounded-full" />
    </View>
  );
};
