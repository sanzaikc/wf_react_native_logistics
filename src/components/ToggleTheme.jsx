import React from "react";
import {
  StyleSheet,
  Switch,
  TouchableWithoutFeedback,
  View,
} from "react-native";

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
    <TouchableWithoutFeedback onPress={toggleSwitch}>
      <View style={styles.container}>
        <AppText>Theme</AppText>

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
      </View>
    </TouchableWithoutFeedback>
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
