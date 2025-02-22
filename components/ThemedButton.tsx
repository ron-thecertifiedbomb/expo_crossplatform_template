import { useThemeColor } from "@/constants/context/ThemeContext";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet, ViewStyle, TextStyle, StyleProp } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface ThemedButtonProps {
  key?: string;
  onPress: () => void;
  title?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
}

export function ThemedButton({ key, onPress, title = "Toggle Theme Mode", style, textStyle }: ThemedButtonProps) {
  const { colors } = useThemeColor();

  return (
    <TouchableOpacity
      key={key}
      onPress={onPress}
    >
      <ThemedView style={[styles.button, { backgroundColor: colors.background }, style]}>
        <ThemedText style={[styles.text, textStyle]} text={title} />
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
