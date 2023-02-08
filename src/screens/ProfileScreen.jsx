import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "../components/shared/AppText";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <AppText>YOLO</AppText>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
