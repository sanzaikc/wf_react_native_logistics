import React from "react";
import { StyleSheet, Switch, TouchableOpacity, View } from "react-native";

import useAppTheme from "../hooks/useAppTheme";

import AppText from "./shared/AppText";

const ToggleTheme = () => {
  const { appThemeScheme, setAppThemeScheme } = useAppTheme();

  const isLightTheme = React.useMemo(
    () => appThemeScheme === "light",
    [appThemeScheme]
  );

  const toggleSwitch = () => setAppThemeScheme(isLightTheme ? "dark" : "light");

  return (
    <TouchableOpacity style={styles.container} onPress={toggleSwitch}>
      <AppText>Toggle Theme</AppText>

      <View style={styles.switch}>
        <AppText style={styles.switchLabel}>{appThemeScheme}</AppText>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={!isLightTheme}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ToggleTheme;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switch: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: {
    textTransform: "capitalize",
  },
});
