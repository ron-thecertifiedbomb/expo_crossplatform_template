
import { Text, type TextProps, StyleSheet } from "react-native";


export type LabelProps = TextProps & {
  customTextStyle?: object;
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  text: string;
};

const Label: React.FC<LabelProps> = ({
  customTextStyle,
  lightColor,
  darkColor,
  type = "default",
  text,
  ...rest
}) => {


  return (
    <Text
      style={[
        { lightColor },
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "defaultSemiBold" && styles.defaultSemiBold,
        type === "subtitle" && styles.subtitle,
        type === "link" && styles.link,
        customTextStyle,
      ]}
      {...rest}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});

export default Label;
