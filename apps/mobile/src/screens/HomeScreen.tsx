import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header, MenuBar, Icons } from '@koru/ui';

export const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <Header />
      
      <ScrollView className="flex-1 px-4 pt-4">
        {/* Greeting */}
        <Text className="text-2xl font-bold text-gray-900 mb-6">Good Morning</Text>

        {/* Quick Actions */}
        <View className="flex-row justify-between mb-8">
            <ActionButton icon={<Icons.AddNote width={24} height={24} />} label="Add Note" />
            <ActionButton icon={<Icons.FolderAdd width={24} height={24} />} label="New Folder" />
            <ActionButton icon={<Icons.Play width={24} height={24} />} label="Review" />
        </View>

        {/* Recent Folders */}
        <Text className="text-lg font-semibold text-gray-900 mb-4">Recent Folders</Text>
        <View className="flex-row flex-wrap justify-between">
            <FolderCard title="Personal" count={12} />
            <FolderCard title="Work" count={5} />
            <FolderCard title="Ideas" count={8} />
            <FolderCard title="Archive" count={2} />
        </View>
        
        Recent Documents
         <Text className="text-lg font-semibold text-gray-900 mb-4 mt-6">Recent Documents</Text>
         <DocumentItem title="Project Koru Specs" date="2 hours ago" />
         <DocumentItem title="Meeting Notes" date="Yesterday" />
         <DocumentItem title="Shopping List" date="2 days ago" />
         
         {/* Padding for bottom menu */}
         <View className="h-20" />

      </ScrollView>
      
      <MenuBar className="absolute bottom-0 left-0 right-0" />
    </View>
  );
};

const ActionButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <TouchableOpacity className="items-center bg-gray-50 p-4 rounded-xl w-[30%]">
        <View className="mb-2">{icon}</View>
        <Text className="text-sm font-medium text-gray-700">{label}</Text>
    </TouchableOpacity>
);

const FolderCard = ({ title, count }: { title: string, count: number }) => (
    <TouchableOpacity className="bg-blue-50 p-4 rounded-xl w-[48%] mb-4">
        <Icons.Folder width={32} height={32} className="mb-2 text-blue-500" />
        <Text className="text-base font-semibold text-gray-900">{title}</Text>
        <Text className="text-sm text-gray-500">{count} notes</Text>
    </TouchableOpacity>
);

const DocumentItem = ({ title, date }: { title: string, date: string }) => (
    <TouchableOpacity className="flex-row items-center p-4 bg-white border border-gray-100 rounded-xl mb-3 shadow-sm">
        <Icons.Document width={24} height={24} className="mr-3 text-gray-500" />
        <View className="flex-1">
            <Text className="text-base font-medium text-gray-900">{title}</Text>
            <Text className="text-xs text-gray-400">{date}</Text>
        </View>
    </TouchableOpacity>
);
