import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

interface SearchBarProps extends TextInputProps {
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className, ...props }) => {
  return (
    <View className={`bg-gray-100 rounded-lg p-2 flex-row items-center ${className}`}>
      <TextInput 
        placeholder="Search..." 
        className="flex-1 ml-2 text-base"
        placeholderTextColor="#9CA3AF"
        {...props}
      />
    </View>
  );
};
