import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "@/components/auth/ui/Button";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SenhaAlteradaScreen = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-white px-6 pb-10">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../../../assets/images/PasswordSucess.png")}
          className="w-full h-1/2"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold mt-2 mb-1 text-center">
          Senha alterada com Sucesso!
        </Text>
        <Text className="text-base text-gray-500 text-center">
          Agora você pode voltar para a tela de login e acessar sua conta.
        </Text>
      </View>
      <Button
        onPress={() => router.replace('/(auth)/login')}
        className="bg-blue-500 w-full mt-8"
        style={{ marginBottom: insets.bottom }}
      >
        Voltar para o Login
      </Button>
    </View>
  );
};

export default SenhaAlteradaScreen;