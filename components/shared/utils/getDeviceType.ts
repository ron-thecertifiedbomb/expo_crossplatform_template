import { Dimensions } from "react-native";

export const getDeviceType = () => {
  const { width } = Dimensions.get("window");

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return { isMobile, isTablet, isDesktop };
};
