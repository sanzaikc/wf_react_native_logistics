import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

import { APP_CONSTANTS } from "../../constants/appConstants";

const AppDivider = () => {
  const { colors } = useTheme();

  return <View style={[styles.container, { borderColor: colors.border }]} />;
};

export default AppDivider;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    marginBottom: APP_CONSTANTS.APP_SPACING,
  },
});
