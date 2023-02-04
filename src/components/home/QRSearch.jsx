import { StyleSheet, View } from "react-native";

import { APP_CONSTANTS } from "../../common/constants";

const QRSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}></View>
    </View>
  );
};

export default QRSearch;

const styles = StyleSheet.create({
  container: {
    padding: APP_CONSTANTS.APP_SPACING,
  },

  search: {
    height: 55,
    backgroundColor: "#fafafa",
    borderRadius: APP_CONSTANTS.APP_BORDER_RADIUS * 0.5,
  },
});
