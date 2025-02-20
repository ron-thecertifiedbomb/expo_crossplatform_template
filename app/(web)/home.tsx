
import { ThemedView } from "components/ThemedView";
import React from "react";
import { ThemedText } from "components/ThemedText";


const HomeScreen: React.FC = () => {
  return (

   <ThemedView style={{ padding: 20, alignItems: "center" }}>
      <ThemedText type="subtitle" darkColor={'darkColor'}>Start Exploring</ThemedText>
    </ThemedView>

  );
};  

export default HomeScreen;
