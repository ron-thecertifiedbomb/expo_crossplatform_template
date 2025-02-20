import React from "react";
import { Tabs } from "expo-router";
import Icon from "components/shared/Icon";
import { ThemeProvider, useThemeColor } from "constants/context/ThemeContext"; // Import ThemeProvider

function TabsLayout() {
  const { colors } = useThemeColor(); // Get theme colors

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: colors.text, // Use theme color
        tabBarStyle: { backgroundColor: colors.background }, // Dynamic background
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Icon name="home" size={size} color={colors.text} type="AntDesign" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Icon
              name="settings-outline"
              size={size}
              color={colors.icon}
              type="Ionicons"
            />
          ),
        }}
      />
    </Tabs>
  );
}

// Wrap the entire app with ThemeProvider
export default function TabsWithTheme() {
  return (
    <ThemeProvider>
      <TabsLayout />
    </ThemeProvider>
  );
}
