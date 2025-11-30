import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface BackHeaderProps {
  title: string;
}

export function BackHeader({ title }: BackHeaderProps) {
  const router = useRouter();

  return (
    <View className="flex-row items-center p-4 border-b border-gray-200 bg-white">
      <TouchableOpacity onPress={() => router.back()} className="p-2">
        <ChevronLeft size={24} color="#222" />
      </TouchableOpacity>
      <Text className="text-lg font-semibold ml-4">{title}</Text>
    </View>
  );
}
