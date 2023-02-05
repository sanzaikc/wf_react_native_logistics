import { StyleSheet, Text } from "react-native";

const SecondaryText = ({ children }) => {
  return <Text style={styles.primary}>{children}</Text>;
};

export default SecondaryText;

const styles = StyleSheet.create({
  primary: { fontFamily: "Quicksand_700Bold", fontSize: 18, fontWeight: "500" },
});