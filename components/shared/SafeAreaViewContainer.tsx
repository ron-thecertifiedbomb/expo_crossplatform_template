import { useThemeColor } from "constants/context/ThemeContext";
import React from "react";
import { SafeAreaView, ViewStyle } from "react-native";

interface ThemedSafeContainerProps {
  children: React.ReactNode; 
  style?: ViewStyle; 
}

const ThemedSafeContainer: React.FC<ThemedSafeContainerProps> = ({ children, style }) => {
    const { colors } = useThemeColor();
    const backgroundColor = colors.background;
  return (
    <SafeAreaView style={[ {backgroundColor}, style]}>{children}</SafeAreaView>
  );
};

export default ThemedSafeContainer;
