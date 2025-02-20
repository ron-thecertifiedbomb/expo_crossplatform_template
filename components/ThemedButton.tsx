import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useThemeColor } from "constants/context/ThemeContext";

export function ThemedButton() {
  const { colors, toggleTheme } = useThemeColor();

  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: colors.background,
          padding: 12,
          borderRadius: 8,
        }}
        onPress={toggleTheme}
      >
        <Text style={{ color: colors.text, textAlign: "center", fontSize: 16 }}>
         Toggle Theme Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
}
