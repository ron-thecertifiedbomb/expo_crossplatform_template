import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { IconProps } from "./types/types";
import { useThemeColor } from "@/constants/context/ThemeContext";


const Icon: React.FC<IconProps> = ({ name, size = 30, type = "AntDesign", style }) => {
  const { colors } = useThemeColor();

  const iconLibraries = {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
  };

  const IconComponent = iconLibraries[type];

  if (!IconComponent) {
    console.error(`Icon type "${type}" not found. Please choose a valid icon set.`);
    return null;
  }

  return (
    <IconComponent
      name={name}
      size={size}
      color={colors.icon}
      style={style} // ✅ Pass style as a prop
    />
  );
};

export default Icon;
