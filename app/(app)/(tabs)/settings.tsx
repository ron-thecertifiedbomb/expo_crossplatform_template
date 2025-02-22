import Clock from "@/components/shared/Clock/Clock";
import Date from "@/components/shared/Date/Date";
import ThemedSafeContainer from "@/components/shared/SafeAreaViewContainer";
import { getCommonStyles } from "@/components/shared/Styles/Common/CommonStyle";
import { getDeviceType } from "@/components/shared/utils/getDeviceType";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";


const Settings = () => {
  const deviceType = getDeviceType();
  const styles = getCommonStyles(deviceType);

  return (
    <ThemedSafeContainer style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedView style={{ alignItems: "center", justifyContent: "center"}}>
      <Clock />
      <Date/>
      </ThemedView >
    
    </ThemedSafeContainer>
  );
};

export default Settings;
