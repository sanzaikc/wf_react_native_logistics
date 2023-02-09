import React from "react";
import { StyleSheet, View } from "react-native";

import { APP_CONSTANTS } from "../constants/appConstants";

import ToggleTheme from "../components/ToggleTheme";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ToggleTheme />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: APP_CONSTANTS.APP_SPACING,
  },
});
