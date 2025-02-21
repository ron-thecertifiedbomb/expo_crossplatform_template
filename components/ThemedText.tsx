import React from "react";
import { useThemeColor } from "constants/context/ThemeContext";
import { Text, TextStyle, StyleProp } from "react-native";

interface ThemedTextProps {
  text: string;
  style?: StyleProp<TextStyle>;
}

export function ThemedText({ text, style, ...rest }: ThemedTextProps) {
  const { colors } = useThemeColor();
  const textColorStyle: TextStyle = { color: colors.text };

  return (
    <Text style={[textColorStyle, style]} {...rest}>
      {text}
    </Text>
  );
}
