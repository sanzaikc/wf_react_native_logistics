import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { APP_CONSTANTS } from "../../../common/constants";

import AppText from "../../shared/AppText";

const ShippingInfo = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.regNo}>Reg123456789</AppText>

        <AppText style={styles.status}>Delivered</AppText>
      </View>

      <View style={styles.destinations}>
        <View style={[styles.destinationItem]}>
          <AppText style={styles.destinationDate}>20 Dec, 2022</AppText>

          <AppText style={styles.destinationAddress}>Kathmandu</AppText>
        </View>

        <Entypo name="chevron-thin-right" size={18} color="#c6c6c6" />

        <View style={[styles.destinationItem, styles.toDestination]}>
          <AppText style={styles.destinationDate}>20 Dec, 2022</AppText>

          <AppText style={styles.destinationAddress}>Pokhara</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShippingInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbfbfb",
    padding: APP_CONSTANTS.APP_SPACING * 1.5,
    borderRadius: APP_CONSTANTS.APP_BORDER_RADIUS,
    marginBottom: APP_CONSTANTS.APP_SPACING * 1.25,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: APP_CONSTANTS.APP_SPACING,
  },
  regNo: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  status: {
    backgroundColor: "#000",
    color: "#fff",
    fontSize: 12,
    paddingHorizontal: APP_CONSTANTS.APP_SPACING,
    paddingVertical: APP_CONSTANTS.APP_SPACING * 0.25,
    borderRadius: APP_CONSTANTS.APP_BORDER_RADIUS,
    fontSize: 10,
  },
  destinations: {
    flexDirection: "row",
    alignItems: "center",
  },
  destinationItem: {
    flex: 1,
  },
  destinationDate: {
    color: "gray",
    fontSize: 10,
  },
  destinationAddress: {
    color: "gray",
    fontSize: 12,
  },
  toDestination: {
    alignItems: "flex-end",
  },
});
