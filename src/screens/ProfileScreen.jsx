import React from "react";
import { StyleSheet } from "react-native";

import { APP_CONSTANTS } from "../constants/appConstants";

import AppView from "../components/shared/AppView";
import ToggleTheme from "../components/ToggleTheme";

const ProfileScreen = () => {
  return (
    <AppView style={styles.container}>
      <ToggleTheme />
    </AppView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: APP_CONSTANTS.APP_SPACING,
  },
});
