import React from 'react';
import { Image, SafeAreaView, Text, View, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { Button } from '@/components/auth/ui/Button'; // Assuming Button is moved
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ArrowRight } from 'lucide-react-native';

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('../../../assets/images/home-image.png')} // Adjusted path
      className="flex-1"
    >
      <SafeAreaView className="flex-1 bg-transparent">
        <View className="flex-1 items-center justify-center px-4 pt-10">
          <Image
            source={require('../../../assets/images/logo-text.png')} // Adjusted path
            className="w-60 h-30"
            resizeMode="contain"
          />
        </View>

        <View className="p-4" style={{ paddingBottom: insets.bottom + 24 }}>
            <Link href="/login" asChild>
                <Button className="w-full mb-4">
                    Entrar
                </Button>
            </Link>
            <Link href="/(auth)/register" asChild>
                <Button variant="outline" className="w-full">
                    Criar uma conta
                </Button>
            </Link>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
