import { useThemeColor } from "constants/context/ThemeContext";
import { Text } from "react-native";




export function ThemedText({
  ...rest
}) {
  const { colors } = useThemeColor(); // Get the full theme colors
  const color = colors.text; // Determine the text color

  return (
    <Text
      style={[
        { color }, // Apply the dynamic text color

      ]}
      {...rest}
    />
  );
}


