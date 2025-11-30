import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@/components/auth/ui/Button';
import { BackHeader } from '@/components/auth/ui/BackHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Terms() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <BackHeader title="Termos de Uso" />
      <View className="flex-1">
        <ScrollView className="flex-1 px-6 pt-2" contentContainerStyle={{ paddingBottom: insets.bottom + 24 }} keyboardShouldPersistTaps="handled">
          <Text className="text-gray-700 text-lg">
            Para proteger cada etapa da sua jornada, solicitamos seu CPF por 3 motivos muito importantes:
            

            1. Validar sua identidade com segurança durante consultas e procedimentos médicos.
            

            2. Garantir transparência na emissão de notas fiscais para exames, medicamentos e serviços.
            

            3. Assegurar a integridade das transações e dos seus dados pessoais.
            

            Assim, mantemos um ambiente confiável e transparente para você e toda nossa comunidade.
            

            Fique tranquilo(a)! Seus dados são protegidos com os mais altos padrões de segurança, e usaremos essas informações apenas para seu benefício.
            

            Para proteger cada etapa da sua jornada, solicitamos seu CPF por 3 motivos muito importantes:
            

            1. Validar sua identidade com segurança durante consultas e procedimentos médicos.
            

            2. Garantir transparência na emissão de notas fiscais para exames, medicamentos e serviços.
            

            3. Assegurar a integridade das transações e dos seus dados pessoais.
            

            Assim, mantemos um ambiente confiável e transparente para você e toda nossa comunidade.
            

            Fique tranquilo(a)! Seus dados são protegidos com os mais altos padrões de segurança, e usaremos essas informações apenas para seu benefício.
          </Text>
        </ScrollView>
        <View className="px-6 pb-6 pt-2 bg-white" style={{ paddingBottom: insets.bottom + 8 }}>
          <Button onPress={() => router.back()} className="bg-blue-500 rounded-md py-3 w-full">
            Entendi
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}