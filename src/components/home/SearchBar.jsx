import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { APP_CONSTANTS } from "../../common/constants";

import AppTextInput from "../shared/AppTextInput";

const SearchBar = () => {
  const [searchInput, onChangeSearchInput] = React.useState("");

  const searchInputRef = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => searchInputRef.current.focus()}
        >
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>

        <AppTextInput
          ref={searchInputRef}
          style={styles.input}
          value={searchInput}
          placeholder="Enter code to search..."
          onChangeText={onChangeSearchInput}
        />

        <TouchableOpacity style={styles.action} onPress={() => {}}>
          <Ionicons name="scan-outline" size={24} color="black" />
        </TouchableOpacity>
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
  action: { flexShrink: 0 },
});
