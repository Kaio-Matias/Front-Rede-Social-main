import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle, StyleProp } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  style,
  icon,
  className = "",
  variant = 'primary',
  disabled = false
}) => {
  const baseClasses = "p-4 rounded-xl flex-row justify-center items-center";

  const variantClasses = {
    primary: "bg-blue-500",
    secondary: "bg-blue-400",
    outline: "border border-blue-500 bg-transparent",
  };

  const textVariantClasses = {
      primary: "text-white",
      secondary: "text-white",
      outline: "text-blue-500",
  }

  const textClass = textVariantClasses[variant];
  const bgClass = variantClasses[variant];

  return (
    <TouchableOpacity
      className={`${baseClasses} ${bgClass} ${className}`}
      style={[disabled ? { opacity: 0.5 } : {}, style]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text className={`text-xl font-semibold text-center ${textClass}`}>{children}</Text>
      {icon && <View className="ml-2 items-center justify-center">{icon}</View>}
    </TouchableOpacity>
  );
};