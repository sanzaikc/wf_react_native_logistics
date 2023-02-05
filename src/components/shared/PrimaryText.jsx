import { StyleSheet, Text } from "react-native";

const PrimaryText = ({ children }) => {
  return <Text style={styles.primary}>{children}</Text>;
};

export default PrimaryText;

const styles = StyleSheet.create({
  primary: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 20,
    fontWeight: "500",
  },
});
