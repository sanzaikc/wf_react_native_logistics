import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { APP_CONSTANTS } from "../../common/constants";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Ionicons name="search-outline" size={26} color="black" />

        <TextInput style={styles.input} />

        <Ionicons name="scan-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    padding: APP_CONSTANTS.APP_SPACING,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    backgroundColor: "#fafafa",
    borderRadius: APP_CONSTANTS.APP_BORDER_RADIUS * 0.5,
    paddingHorizontal: APP_CONSTANTS.APP_SPACING,
  },
  input: {
    flexGrow: 1,
    marginHorizontal: 10,
    height: "100%",
  },
});
