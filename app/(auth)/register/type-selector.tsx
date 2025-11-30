import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { ArrowRight } from "lucide-react-native";
import { BackHeader } from "@/components/auth/ui/BackHeader";
import { Button } from "@/components/auth/ui/Button";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from "expo-router";

export default function ConnectTypeScreen() {
    const insets = useSafeAreaInsets();
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: insets.top }}>
            <BackHeader title="Nova Conta" />

            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: insets.bottom + 24 }} keyboardShouldPersistTaps="handled">
                <View className="items-center justify-center">
                    <Image
                        source={require("../../../../assets/images/register-image-part2.png")}
                        style={{ width: "90%", height: 300 }}
                        resizeMode="contain"
                    />
                </View>

                <View className="flex-1 px-6 ">
                    <Text className="text-xl font-bold mb-2">Como você quer se conectar?</Text>
                    <Text className="text-base text-gray-600 mb-6">
                        Escolha se deseja oferecer seus serviços como <Text style={{fontWeight: 'bold'}}>profissional de saúde</Text> ou cadastrar sua <Text style={{fontWeight: 'bold'}}>unidade de atendimento</Text> (Clínicas, Laboratórios, Consultórios e outros).
                    </Text>

                    <Link href="/(auth)/register/professional/step1-personal" asChild>
                        <Button
                            className="flex-row items-center justify-between rounded-xl px-6 py-4 mb-4"
                            style={{ backgroundColor: '#01AEA4', justifyContent: 'space-between' }}
                            icon={<ArrowRight size={22} color="#fff" />}
                        >
                            <Text className="text-white text-base font-semibold">Continuar como Profissional de Saúde</Text>
                        </Button>
                    </Link>

                    <Link href="/(auth)/register/clinic/step1-personal" asChild>
                        <Button
                            className="flex-row items-center justify-between rounded-xl px-6 py-4"
                            style={{ backgroundColor: '#7F5CE1', justifyContent: 'space-between' }}
                            icon={<ArrowRight size={22} color="#fff" />}
                        >
                            <Text className="text-white text-base font-semibold">Continuar como Unidade de Atendimento</Text>
                        </Button>
                    </Link>
                </View>
            </ScrollView>
        </View>
    );
}