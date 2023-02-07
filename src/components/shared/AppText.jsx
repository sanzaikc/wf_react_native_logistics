import { useTheme } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";

const AppText = ({ children, ...props }) => {
  const { style, ...otherProps } = props;

  const { colors } = useTheme();

  return (
    <Text
      style={[styles.styledText, { color: colors.text }, style]}
      {...otherProps}
    >
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
