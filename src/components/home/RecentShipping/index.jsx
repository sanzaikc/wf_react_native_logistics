import { StyleSheet, View } from "react-native";

import { APP_CONSTANTS } from "../../../common/constants";

import PrimaryText from "../../shared/PrimaryText";
import ShippingInfo from "./ShippingInfo";

export default function RecentShipping() {
  return (
    <View style={styles.container}>
      <PrimaryText>Recent Shipping!</PrimaryText>

      <ShippingInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: APP_CONSTANTS.APP_SPACING,
  },
});
