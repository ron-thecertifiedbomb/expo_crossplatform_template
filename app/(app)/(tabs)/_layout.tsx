import React from "react";
import { Tabs } from "expo-router";
import Icon from "components/shared/Icon";

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{ tabBarActiveTintColor: "black" }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="home" size={size} color={color} type="AntDesign" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Icon name="settings-outline" size={size} color={color} type="Ionicons" />,
        }}
      />
    </Tabs>
  );
}
