import React from "react";
import { Tabs } from "expo-router";
import Icon from "components/shared/Icon/Icon";
import { ThemeProvider, useThemeColor } from "constants/context/ThemeContext"; // Import ThemeProvider
import { ThemedText } from "components/ThemedText";

function TabsLayout() {
  const { colors } = useThemeColor(); 

  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: colors.tabIconSelected, 
        tabBarInactiveTintColor: colors.tabIconDefault, 
        tabBarStyle: { backgroundColor: colors.background },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" }, 
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <ThemedText  style={{ color }} text={'Home'}/>
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} style={{ color }} type="AntDesign" />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarLabel: ({ color }) => (
            <ThemedText  style={{ color }} text={'Settings'}/>
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings-outline" size={size} style={{ color }} type="Ionicons" />
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
