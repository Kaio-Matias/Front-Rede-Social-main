import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View, ImageBackground } from 'react-native';
import { Input } from '@/components/auth/ui/Input';
import { Button } from '@/components/auth/ui/Button';
import { Link, useRouter } from 'expo-router';
import { KeyRound, IdCard, ArrowRight, ChevronRight } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const handleLogin = () => {
    // TODO: Implement actual login logic
    console.log('Login pressed -> navigate to /');
    router.replace('/(tabs)/home');
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/home-image.png')}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 bg-transparent justify-end">
        <View className="bg-white p-6 rounded-t-3xl" style={{ paddingBottom: insets.bottom + 24 }}>
          <Text className="text-2xl font-bold mb-1 text-center">Bem-vindo de volta!</Text>
          <Text className="text-base text-gray-500 mb-6 text-center">
            Entre na sua conta iSaúde.
          </Text>
          <Input
            label="CPF ou CNPJ"
            placeholder="Digite seu CPF ou CNPJ"
            value={cpfCnpj}
            onChangeText={setCpfCnpj}
            icon={<IdCard size={18} color="#A0AEC0" />}
          />
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            icon={<KeyRound size={18} color="#A0AEC0" />}
          />
          <Link href="/(auth)/password/forgot" asChild>
            <Text className="text-sm text-right text-gray-600 my-4">
              Esqueci minha senha
            </Text>
          </Link>

          <Button onPress={handleLogin} icon={<ArrowRight size={20} color="white" />}>
            Continuar
          </Button>

          <View className="flex-row justify-center mt-6">
            <Text className="text-center text-base">Novo por aqui? </Text>
            <Link href="/(auth)/register" asChild>
              <Text className="text-base font-semibold text-blue-600">Crie uma conta!</Text>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
