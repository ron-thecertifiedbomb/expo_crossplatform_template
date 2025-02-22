
import ThemedSafeContainer from "@/components/shared/SafeAreaViewContainer";
import { getCommonStyles } from "@/components/shared/Styles/Common/CommonStyle";
import TicTacToe from "@/components/shared/TicTacToe/TicTacToe";
import { getDeviceType } from "@/components/shared/utils/getDeviceType";
import { ThemedText } from "@/components/ThemedText";
import React from "react";

const HomeScreen = () => {
  const deviceType = getDeviceType();
  const styles = getCommonStyles(deviceType);

  console.log('isMobile', deviceType.isMobile)

  return (
    <ThemedSafeContainer style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     <TicTacToe />
    </ThemedSafeContainer>
  );
};

export default HomeScreen;