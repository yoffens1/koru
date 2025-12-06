import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icons, colors } from '@koru/ui';

interface StudyBlockProps {
  totalCards?: number;
  dueToday?: number;
  onStudyPress?: () => void;
}

export const StudyBlock: React.FC<StudyBlockProps> = ({ 
  totalCards = 9999, 
  dueToday = 92,
  onStudyPress 
}) => {
  return (
    <View className="flex-row gap-4">
      {/* Stats Block */}
      <View className="flex-1 bg-bg2-tertiary rounded-[32px] p-6 justify-center">
        <Text className="text-accent text-17 font-regular mb-2">
          Total: {totalCards}
        </Text>
        <Text className="text-accent text-17 font-regular">
          Due Today: {dueToday}
        </Text>
      </View>

      {/* Study Button Block */}
      <TouchableOpacity 
        onPress={onStudyPress}
        activeOpacity={0.8}
        className="bg-[#8D6E8C] rounded-[32px] p-6 aspect-square items-center justify-center"
        style={{ width: 140 }}
      >
        <View className="flex-row items-center gap-2">
          <Icons.Play width={24} height={24} color="#FFFFFF" />
          <Text className="text-label-primary text-24 font-regular">Study</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
