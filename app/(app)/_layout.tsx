
import { Redirect, Stack } from "expo-router";
import { Platform } from "react-native";
import React from "react";
import { useThemeColor } from "@/components/hooks/useThemeColor";

export default function RootLayoutContent() {
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
