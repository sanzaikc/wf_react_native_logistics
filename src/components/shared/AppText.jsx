import { StyleSheet, Text } from "react-native";

const AppText = ({ children, ...props }) => {
  const { style, ...otherProps } = props;

  return (
    <Text style={[styles.styledText, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  styledText: {
    fontFamily: "Quicksand_400Regular",
  },
});
