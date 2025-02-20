import React from "react";
import { useThemeColor } from "constants/context/ThemeContext";
import { View, type ViewProps, StyleSheet } from "react-native";
import { ThemedButton } from "./ThemedButton";

export function ThemedView({ style, ...props }: ViewProps) {
  const { colors } = useThemeColor(); // Get the theme colors
  const backgroundColor = colors.background; // Use theme color or fallback
 

  return (
    <View style={[{ backgroundColor }, style]} {...props}>
      <View style={[styles.buttonContainer, { backgroundColor: backgroundColor }]}>
       <ThemedButton/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    padding: 5,
    marginTop: 10,
  },
});
