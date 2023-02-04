import { StyleSheet, Text } from "react-native";
import { APP_CONSTANTS } from "../../common/constants";

const PrimaryText = ({ children }) => {
  return <Text style={styles.primary}>{children}</Text>;
};

export default PrimaryText;

const styles = StyleSheet.create({
  primary: {
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: APP_CONSTANTS.APP_SPACING,
  },
});
