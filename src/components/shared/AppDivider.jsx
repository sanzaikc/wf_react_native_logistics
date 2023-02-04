import { StyleSheet, View } from "react-native";
import { APP_CONSTANTS } from "../../common/constants";

const AppDivider = () => {
  return <View style={styles.container} />;
};

export default AppDivider;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#f1f1f1",
    marginBottom: APP_CONSTANTS.APP_SPACING,
  },
});
