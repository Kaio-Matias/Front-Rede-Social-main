import React from "react";
import { View, Text, Image, ScrollView, Platform } from "react-native";
import { ArrowRight } from "lucide-react-native";
import { BackHeader } from "@/components/auth/ui/BackHeader";
import { Button } from "@/components/auth/ui/Button";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from "expo-router";

export default function RegisterScreen() {
    const insets = useSafeAreaInsets();
    
    return (
        <View style={{ 
            flex: 1, 
            backgroundColor: "#fff",
            paddingTop: insets.top,
        }}>
            <BackHeader title="Nova Conta" />

            <ScrollView 
                contentContainerStyle={{ flexGrow: 1, paddingBottom: insets.bottom + 24 }} 
                keyboardShouldPersistTaps="handled"
            >
                <View className="items-center justify-center mt-2">
                    <Image
                        source={require("../../../../assets/images/register-image.png")}
                        style={{ width: "90%", height: 300 }}
                        resizeMode="contain"
                    />
                </View>

                <View className="flex-1 px-6">
                    <Text className="text-2xl font-bold mb-2">Vamos iniciar sua Jornada.</Text>
                    <Text className="text-base text-gray-600 mb-2">
                        No iSaúde, conectamos profissionais de saúde, clínicas, farmácias e pacientes em uma rede de cuidado e bem-estar.
                    </Text>
                    <Text className="text-base text-gray-600 mb-6">
                        Escolha abaixo como você deseja começar sua jornada com a gente:
                    </Text>

                    <Link href="/(auth)/register/patient/step1-personal" asChild>
                        <Button
                            className="flex-row items-center justify-between rounded-xl px-6 py-4 mb-4"
                            variant="primary"
                            icon={<ArrowRight size={22} color="#fff" />}
                            style={{ justifyContent: 'space-between' }}
                        >
                            <Text className="text-white text-base font-semibold">Quero cuidar da minha Saúde</Text>
                        </Button>
                    </Link>

                    <Link href="/(auth)/register/type-selector" asChild>
                        <Button
                            className="flex-row items-center justify-between rounded-xl px-6 py-4"
                            variant="secondary"
                            icon={<ArrowRight size={22} color="#fff" />}
                            style={{ justifyContent: 'space-between' }}
                        >
                            <Text className="text-white text-base font-semibold">Quero oferecer meus Serviços</Text>
                        </Button>
                    </Link>
                </View>
            </ScrollView>
        </View>
    );
}