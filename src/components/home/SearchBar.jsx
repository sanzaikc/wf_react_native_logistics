import React from "react";
import { useTheme } from "@react-navigation/native";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { APP_CONSTANTS } from "../../constants/appConstants";

import AppTextInput from "../shared/AppTextInput";

const SearchBar = () => {
  const [searchInput, onChangeSearchInput] = React.useState("");

  const searchInputRef = React.useState(null);

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.search, { backgroundColor: colors.card }]}>
        <TouchableOpacity
          style={styles.action}
          onPress={() => searchInputRef.current.focus()}
        >
          <Ionicons
            name="search-outline"
            size={APP_CONSTANTS.APP_ICON_SIZE}
            color={colors.text}
          />
        </TouchableOpacity>

        <AppTextInput
          ref={searchInputRef}
          style={[styles.input, { color: colors.text }]}
          value={searchInput}
          placeholder="Enter code to search..."
          onChangeText={onChangeSearchInput}
        />

        <TouchableOpacity style={styles.action} onPress={() => {}}>
          <Ionicons
            name="scan-outline"
            size={APP_CONSTANTS.APP_ICON_SIZE}
            color={colors.text}
          />
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 55,
    borderRadius: APP_CONSTANTS.APP_BORDER_RADIUS * 0.5,
  },
  input: {
    flexGrow: 1,
    height: "100%",
    maxWidth:
      Dimensions.get("window").width -
      (APP_CONSTANTS.APP_ICON_SIZE * 2 + APP_CONSTANTS.APP_SPACING * 6),
  },
  action: {
    flexShrink: 0,
    marginHorizontal: APP_CONSTANTS.APP_SPACING,
  },
});
