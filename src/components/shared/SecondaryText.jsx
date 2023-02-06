import { StyleSheet } from "react-native";

import AppText from "./AppText";

const SecondaryText = ({ children }) => {
  return <AppText style={styles.primary}>{children}</AppText>;
};

export default SecondaryText;

const styles = StyleSheet.create({
  primary: { fontFamily: "Quicksand_700Bold", fontSize: 18, fontWeight: "500" },
});
