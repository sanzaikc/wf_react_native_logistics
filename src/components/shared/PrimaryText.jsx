import { StyleSheet } from "react-native";

import AppText from "./AppText";

const PrimaryText = ({ children }) => {
  return <AppText style={styles.primary}>{children}</AppText>;
};

export default PrimaryText;

const styles = StyleSheet.create({
  primary: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 20,
    fontWeight: "500",
  },
});
