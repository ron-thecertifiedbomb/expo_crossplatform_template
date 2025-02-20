import React from "react";
import { useThemeColor } from "constants/context/ThemeContext";
import { View, Button, type ViewProps, StyleSheet } from "react-native";

export function ThemedView({ style, ...props }: ViewProps) {
  const { colors, toggleTheme } = useThemeColor(); // Get the theme colors
  const backgroundColor = colors.background; // Use theme color or fallback
  const buttonColor = colors.background; // Assuming `primary` exists in your theme

  return (
    <View style={[{ backgroundColor }, style]} {...props}>
      <View style={[styles.buttonContainer, { backgroundColor: buttonColor }]}>
        <Button title="Toggle Theme" onPress={toggleTheme} color={colors.text} />
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
