import ThemedSafeContainer from "@/components/shared/SafeAreaViewContainer";
import { getCommonStyles } from "@/components/shared/Styles/Common/CommonStyle";
import { getDeviceType } from "@/components/shared/utils/getDeviceType";
import { ThemedText } from "@/components/ThemedText";


const Settings = () => {
  const deviceType = getDeviceType();
  const styles = getCommonStyles(deviceType);

  return (
    <ThemedSafeContainer style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ThemedText style={styles.text.default} text="Settings" />
    </ThemedSafeContainer>
  );
};

export default Settings;
