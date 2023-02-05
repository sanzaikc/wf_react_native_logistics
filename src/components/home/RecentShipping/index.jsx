import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { APP_CONSTANTS } from "../../../common/constants";

import PrimaryText from "../../shared/PrimaryText";
import ShippingInfo from "./ShippingInfo";

export default function RecentShipping() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PrimaryText>Recent Shipping!</PrimaryText>

        <TouchableOpacity>
          <Text style={styles.more}>View More</Text>
        </TouchableOpacity>
      </View>

      {new Array(3).fill(null).map((_, index) => (
        <ShippingInfo key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: APP_CONSTANTS.APP_SPACING,
    rowGap: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: APP_CONSTANTS.APP_SPACING,
  },
  more: {
    color: "gray",
    fontFamily: "Quicksand_700Bold",
    fontSize: 12,
    paddingHorizontal: APP_CONSTANTS.APP_SPACING * 0.25,
  },
});
