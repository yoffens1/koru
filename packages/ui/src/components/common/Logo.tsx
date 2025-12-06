import React from 'react';
import { View, Text } from 'react-native';
import { Icons } from '../../assets';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <View className={`flex-row items-center ${className}`}>
      <Icons.Logo width={32} height={32} />
      <Text className="text-xl font-bold text-gray-900 ml-2">Koru</Text>
    </View>
  );
};
