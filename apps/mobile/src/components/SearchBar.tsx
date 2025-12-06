import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icons, colors } from '@koru/ui';

interface SearchBarProps {
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onPress, 
  onChangeText, 
  value,
  placeholder = "Search or tell AI" 
}) => {
  return (
    <TouchableOpacity 
      activeOpacity={1}
      onPress={onPress}
      className="flex-row items-center bg-bg2-tertiary rounded-full px-4 py-3"
    >
      <Icons.Search 
        width={20} 
        height={20} 
        color={colors.label.secondary} 
      />
      <TextInput
        className="flex-1 ml-3 text-15 text-label-primary font-regular p-0"
        placeholder={placeholder}
        placeholderTextColor={colors.label.secondary}
        value={value}
        onChangeText={onChangeText}
        editable={!!onChangeText} // Only editable if onChangeText is provided, otherwise acts as a button
        onPressIn={onPress}
      />
    </TouchableOpacity>
  );
};
