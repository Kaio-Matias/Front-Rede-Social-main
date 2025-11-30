import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Input } from "@/components/auth/ui/Input";
import { Button } from "@/components/auth/ui/Button";
import { Phone, ArrowRight } from "lucide-react-native";
import { Link, useRouter } from 'expo-router';
import { BackHeader } from "@/components/auth/ui/BackHeader";
import { ConfirmSmsCodeModal } from "@/components/auth/modals/ConfirmSmsCodeModal";
import { ErrorBanner } from "@/components/auth/ui/ErrorBanner";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ForgotPasswordScreen() {
  const [phone, setPhone] = useState("");
  const [smsModalVisible, setSmsModalVisible] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();
  const insets = useSafeAreaInsets();

  function formatPhone(value: string) {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length < 11) return cleaned;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
  }

  const handleSend = () => {
    if (!phone || phone.length < 11) {
      setErro("Digite um número de telefone válido.");
      return;
    }
    setErro("");
    setSmsModalVisible(true);
  };

  const onVerify = (code: string) => {
    console.log("Verified code:", code);
    setSmsModalVisible(false);
    router.push('/(auth)/password/reset');
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: insets.top }}>
      <BackHeader title="Recuperação de Senha" />
      {/* Assuming ErrorBanner and ConfirmSmsCodeModal will be created/moved */}
      <ErrorBanner visible={!!erro} title={erro} onClose={() => setErro("")} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={{ flex: 1, paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 24, marginBottom: 8 }}>
              Esqueceu sua Senha?
            </Text>
            <Text style={{ fontSize: 15, color: '#6B7280', marginBottom: 32, lineHeight: 20 }}>
              Digite o telefone que você usou para criar sua conta no iSaúde. Vamos te enviar um código para redefinir a senha.
            </Text>
            <Input
              label="Número de Telefone"
              placeholder="(00) 00000-0000"
              value={formatPhone(phone)}
              onChangeText={text => setPhone(text.replace(/\D/g, "").slice(0, 11))}
              icon={<Phone size={18} color="#A0AEC0" />}
              keyboardType="phone-pad"
            />
          </View>
          <View style={{ paddingHorizontal: 24, paddingVertical: 24, paddingBottom: Platform.OS === 'android' ? 40 : 24 }}>
            <Button onPress={handleSend} icon={<ArrowRight size={20} color="white" />} className="w-full">
              Continuar
            </Button>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <Link href="/support" asChild>
                <Text className="mt-4 text-center text-blue-600">Não tenho acesso ao Telefone</Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <ConfirmSmsCodeModal
        visible={smsModalVisible}
        onClose={() => setSmsModalVisible(false)}
        onVerify={onVerify}
        onResend={() => {}}
        phoneEnding={phone.slice(-4)}
      />
    </View>
  );
}