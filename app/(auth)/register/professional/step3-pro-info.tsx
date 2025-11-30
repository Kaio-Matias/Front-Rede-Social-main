import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import Stepper from '@/components/auth/ui/Stepper';
import Select from '@/components/auth/ui/Select';
import { Input } from '@/components/auth/ui/Input';
import { Button } from '@/components/auth/ui/Button';
import { BackHeader } from '@/components/auth/ui/BackHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { ArrowRight, IdCard } from 'lucide-react-native';
import { CustomLink } from '@/components/auth/ui/CustomLink';

const AREAS = ['Médico', 'Enfermeiro', 'Psicólogo', 'Nutricionista', 'Outro'];
const ESTADOS = [
  'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
  'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul',
  'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí',
  'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia',
  'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'
];
const ESPECIALIDADES_MEDICAS = [
  'Alergologia', 'Anestesiologia', 'Angiologia', 'Cardiologia', 'Cirurgia Cardiovascular',
  'Cirurgia da Mão', 'Cirurgia de Cabeça e Pescoço', 'Cirurgia do Aparelho Digestivo',
  'Cirurgia Geral', 'Cirurgia Oncológica', 'Cirurgia Pediátrica', 'Cirurgia Plástica',
  'Cirurgia Torácica', 'Cirurgia Vascular', 'Clínica Médica', 'Dermatologia',
  'Endocrinologia e Metabologia', 'Endoscopia', 'Gastroenterologia', 'Genética Médica',
  'Geriatria', 'Ginecologia e Obstetrícia', 'Hematologia e Hemoterapia', 'Homeopatia',
  'Infectologia', 'Mastologia', 'Medicina de Emergência', 'Medicina de Família e Comunidade',
  'Medicina do Trabalho', 'Medicina do Tráfego', 'Medicina Esportiva', 'Medicina Física e Reabilitação',
  'Medicina Intensiva', 'Medicina Legal e Perícia Médica', 'Medicina Nuclear', 'Medicina Preventiva e Social',
  'Nefrologia', 'Neurocirurgia', 'Neurologia', 'Nutrologia', 'Oftalmologia', 'Oncologia Clínica',
  'Ortopedia e Traumatologia', 'Otorrinolaringologia', 'Patologia', 'Patologia Clínica/Medicina Laboratorial',
  'Pediatria', 'Pneumologia', 'Psiquiatria', 'Radiologia e Diagnóstico por Imagem', 'Radioterapia',
  'Reumatologia', 'Urologia', 'Outro'
];

const ESPECIALIDADES_PSI = [
  'Psicologia Clínica', 'Psicologia Organizacional', 'Psicopedagogia', 'Neuropsicologia', 'Psicologia Escolar', 'Outro'
];

const ESPECIALIDADES_ENF = [
  'Enfermagem Geral', 'Enfermagem Obstétrica', 'Enfermagem Pediátrica', 'Enfermagem em Saúde Pública', 'Enfermagem do Trabalho', 'Outro'
];

const ESPECIALIDADES_NUTRI = [
  'Nutrição Clínica', 'Nutrição Esportiva', 'Nutrição em Saúde Pública', 'Nutrição Funcional', 'Outro'
];

const ESPECIALIDADES_OUTRO = ['Outro'];

const REGISTRO_LABELS: { [key: string]: string } = {
  'Médico': 'Conselho Regional de Medicina (CRM)',
  'Enfermeiro': 'Conselho Regional de Enfermagem (COREN)',
  'Psicólogo': 'Conselho Regional de Psicologia (CRP)',
  'Nutricionista': 'Conselho Regional de Nutrição (CRN)',
  'Outro': 'Número de Registro Profissional',
};

function getEspecialidades(area: string) {
  switch (area) {
    case 'Médico':
      return ESPECIALIDADES_MEDICAS;
    case 'Psicólogo':
      return ESPECIALIDADES_PSI;
    case 'Enfermeiro':
      return ESPECIALIDADES_ENF;
    case 'Nutricionista':
      return ESPECIALIDADES_NUTRI;
    default:
      return ESPECIALIDADES_OUTRO;
  }
}

export default function Step3ProInfo() {
  const [area, setArea] = useState('Médico');
  const [registro, setRegistro] = useState('');
  const [estado, setEstado] = useState('Pará');
  const [especialidade, setEspecialidade] = useState('');
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const isValid = registro.trim().length > 0 && especialidade.trim().length > 0;

  const handleNext = () => {
    router.push('/(auth)/register/professional/step4-user');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <BackHeader title="Nova Conta" />
      <Stepper totalSteps={5} currentStep={3} />
      
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={{ flex: 1, paddingHorizontal: 24 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8, marginTop: 24 }}>Informações Profissionais</Text>
            <Text style={{ color: '#6B7280', fontSize: 15, marginBottom: 24 }}>
              Para oferecer seus serviços em nossa plataforma e assegurar a segurança e credibilidade na comunidade iSaúde, precisamos confirmar suas credenciais profissionais.
            </Text>
            <Select
              label="Qual sua área de atuação?"
              value={area}
              options={AREAS}
              onSelect={setArea}
            />
            <Input
              label={REGISTRO_LABELS[area] || REGISTRO_LABELS['Outro']}
              value={registro}
              onChangeText={setRegistro}
              placeholder="Ex: 12345"
              keyboardType="numeric"
              icon={<IdCard size={20} color="#A0AEC0" />}
            />
            <CustomLink onPress={() => Linking.openURL('https://www.exemplo.com/ajuda-registro')}>
              <Text style={{ color: '#4576F2', fontSize: 13, marginBottom: 12, marginTop: -10 }}>Por que pedimos essa informação?</Text>
            </CustomLink>
            <Select
              label="Estado de Atuação"
              value={estado}
              options={ESTADOS}
              onSelect={setEstado}
            />
            <Select
              label="Qual sua Especialidade?"
              value={especialidade}
              options={getEspecialidades(area)}
              onSelect={setEspecialidade}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={{ 
        paddingHorizontal: 24, 
        paddingBottom: insets.bottom + 24, 
        backgroundColor: '#fff',
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
    </SafeAreaView>
  );
}