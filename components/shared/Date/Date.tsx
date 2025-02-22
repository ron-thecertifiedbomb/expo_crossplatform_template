
import ThemedSafeContainer from "@/components/shared/SafeAreaViewContainer";
import { getCommonStyles } from "@/components/shared/Styles/Common/CommonStyle";
import { getDeviceType } from "@/components/shared/utils/getDeviceType";
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { getDate } from "../utils/getDate";

const Date = () => {
  const deviceType = getDeviceType();
  const styles = getCommonStyles(deviceType);




  return (
    <ThemedSafeContainer>
     <ThemedText style={styles.text.defaultSemiBold}text={`Today is ${getDate()}`}/>
    </ThemedSafeContainer>
  );
};

export default Date;