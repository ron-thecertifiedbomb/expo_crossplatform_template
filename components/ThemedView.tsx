import { useThemeColor } from "@/constants/context/ThemeContext";
import React from "react";

import { View, type ViewProps } from "react-native";

interface ThemedViewProps extends ViewProps {
  children?: React.ReactNode; // Allow children inside the View
}

export function ThemedView({ style, children, ...props }: ThemedViewProps) {
  const { colors } = useThemeColor();
  const backgroundColor = colors.background;

  return (
    <View style={[{ backgroundColor }, style]} {...props}>
  
      {children} 
  
    </View>
  );
}
