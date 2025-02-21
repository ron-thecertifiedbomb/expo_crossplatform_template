import { StyleProp, TextStyle } from "react-native";

export type IconType =
  | "AntDesign"
  | "Entypo"
  | "EvilIcons"
  | "Feather"
  | "FontAwesome"
  | "Ionicons"
  | "MaterialIcons"
  | "MaterialCommunityIcons";

export interface IconProps {
  name: string;
  size?: number;
  type?: IconType;
  style?: StyleProp<TextStyle>; // ✅ Correctly typed style prop
}
