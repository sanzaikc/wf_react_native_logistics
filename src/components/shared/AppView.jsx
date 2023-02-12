import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const AppView = ({ children, ...props }) => {
  const { style, ...otherProps } = props;

  const { colors } = useTheme();

  return (
    <View
      style={[style, styles.container, { backgroundColor: colors.background }]}
      {...otherProps}
    >
      {children}
    </View>
  );
};

export default AppView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
