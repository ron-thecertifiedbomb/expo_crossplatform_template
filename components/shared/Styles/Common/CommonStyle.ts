import { TextStyle } from "react-native";

export const getCommonStyles = ({ isMobile = false, isTablet = false } = {}) => {
  return {
    text: {
      default: {
        fontSize: isTablet ? 18 : isMobile ? 14 : 16,
        lineHeight: isTablet ? 26 : isMobile ? 22 : 24,
      },
      defaultSemiBold: {
        fontSize: isTablet ? 18 : isMobile ? 14 : 16,
        lineHeight: isTablet ? 26 : isMobile ? 22 : 24,
        fontWeight: "600" as TextStyle["fontWeight"], // ✅ Fix applied
      },
      title: {
        fontSize: isTablet ? 36 : isMobile ? 28 : 32,
        fontWeight: "bold" as TextStyle["fontWeight"], // ✅ Fix applied
        lineHeight: isTablet ? 40 : isMobile ? 30 : 32,
      },
      subtitle: {
        fontSize: isTablet ? 22 : isMobile ? 18 : 20,
        fontWeight: "bold" as TextStyle["fontWeight"], // ✅ Fix applied
      },
      link: {
        lineHeight: isTablet ? 32 : isMobile ? 28 : 30,
        fontSize: isTablet ? 18 : isMobile ? 14 : 16,
        color: "#0a7ea4",
      },
    },
    container: {
      center: {
        justifyContent: "center",
        alignItems: "center",
      },
      fullScreen: {
        flex: 1,
      },
      padded: {
        padding: isTablet ? 24 : isMobile ? 16 : 20,
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
      },
    },
  };
};
