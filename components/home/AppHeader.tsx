import React from "react";
import { View } from "react-native";
import Icon from "../shared/Icon";


const AppHeader: React.FC = () => {



  return (
    <View >

      <View>
        <Icon name="navicon" size={40} color="grey" type="EvilIcons" />
      </View>

    </View>
  );
};

// Define styles using StyleSheet

export default AppHeader;
