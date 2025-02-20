import { useThemeColor } from "components/hooks/useThemeColor";
import { ThemeProvider } from "constants/context/ThemeContext";
import { Redirect, Stack } from "expo-router";
import { Platform } from "react-native";
import React from "react";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}

// Separate component to use theme inside the layout
function RootLayoutContent() {
  const { colors } = useThemeColor(); // Get dynamic theme colors

  if (Platform.OS === "web") {
    return <Redirect href="/(web)/home" />;
  } else {
    return (
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background }, // Use themed background
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    );
  }
}
