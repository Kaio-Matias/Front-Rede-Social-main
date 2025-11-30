import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { ArrowRight } from "lucide-react-native";
import { useRouter } from "expo-router";
import { BackHeader } from "@/components/auth/ui/BackHeader";
import Stepper from "@/components/auth/ui/Stepper";
import { Input } from "@/components/auth/ui/Input";
import { Button } from "@/components/auth/ui/Button";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SUGESTOES = [
  "maria.gen",
  "mariagen174",
  "gen.m014",
  "maria.souza"
];

export default function Step4User() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [username, setUsername] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const isValid = username.trim().length > 0;

  const handleNext = () => {
    if (!isValid) return;
    router.push("/(auth)/register/professional/step5-password");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: insets.top }}>
      <BackHeader title="Escolha seu nome de usuário!" />
      <Stepper totalSteps={5} currentStep={4} />
      
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          className="flex-1" 
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View className="px-6">
            <Text className="font-bold text-2xl mb-1 text-left">Escolha seu nome de usuário!</Text>
            <Text className="text-gray-500 text-lg mb-0.5 text-left">Ele será sua identidade única na comunidade.</Text>
            <Text className="text-gray-500 text-lg mb-3 text-left">Lembre-se, ele pode ser uma mistura de letras, números e caracteres especiais.{"\n"}Não se preocupe, você pode alterá-lo a cada 14 dias.</Text>
          </View>
          <View className="px-6 pt-10">
            <Input
              label="Nome de Usuário"
              placeholder="seu.nome"
              value={username}
              onChangeText={setUsername}
              icon={<Text className={inputFocused ? "text-blue-600 text-base mr-1" : "text-gray-400 text-base mr-1"}>@</Text>}
              className="text-base text-gray-800"
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
            />
            <Text className="text-black text-xs mb-1 text-left">Alguns nomes disponíveis</Text>
          </View>
          <View className="mb-4 px-6">
            {SUGESTOES.map((s) => (
              <TouchableOpacity key={s} onPress={() => setUsername(s)} className="mb-1">
                <Text className="text-gray-500 text-sm">@{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={{ 
        paddingHorizontal: 24, 
        paddingBottom: insets.bottom + 24, 
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6'
      }}>
        <Button
          onPress={handleNext}
          icon={<ArrowRight size={18} color="white" />}
          disabled={!isValid}
        >
          Próximo
        </Button>
      </View>
    </View>
  );
}
