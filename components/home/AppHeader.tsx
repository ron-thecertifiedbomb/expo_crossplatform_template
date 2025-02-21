import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconType } from "../shared/Icon/types/types";
import { useThemeColor } from "../hooks/useThemeColor";
import Icon from "../shared/Icon/Icon";


interface ThemedHeaderProps {
  title: string;
  iconName?: string;
  type: IconType
}

const ThemedHeader: React.FC<ThemedHeaderProps> = ({ title, iconName, type  }) => {
  const { colors } = useThemeColor(); // Get theme colors

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {iconName && <Icon name={iconName} size={24}  type={type} />}
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ThemedHeader;
