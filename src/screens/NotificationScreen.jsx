import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

import { APP_CONSTANTS } from "../common/constants";

import AppDivider from "../components/shared/AppDivider";
import GroupedNotifications from "../components/notification/GroupedNotifications";

const NotificationScreen = () => {
  const { colors } = useTheme();

  const _today = [
    {
      regNo: "reg1021389020",
      action: "Transit",
      address: "Tinkune Subidhanagar, Nepal Can Run 69420.",
      date: "Now",
    },
    {
      regNo: "reg1021389020",
      action: "Delivery",
      address: "Koteshwor, Indreni Food Sticks.",
      date: "4h",
    },
    {
      regNo: "reg1021389020",
      action: "Arriving at",
      address: "Iplex Mall Baneshwor, Remax Nepal 44123.",
      date: "6h",
    },
  ];

  const _yesterday = [
    {
      regNo: "reg1021389020",
      action: "Request Pickup",
      address: "Swayambhu, Behind the temple.",
      date: "13h",
    },
  ];

  const _thisWeek = [
    {
      regNo: "reg1021389020",
      action: "Delivered",
      address: "Satdobato, Yogikuti 5422.",
      date: "2d",
    },
    {
      regNo: "reg1021389020",
      action: "Transit",
      address: "Ringroad, Tribhuvan Airport.",
      date: "2d",
    },
    {
      regNo: "reg1021389020",
      action: "Delivery",
      address: "Tangal, Naxal.",
      date: "2d",
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GroupedNotifications groupLabel="Today" notifications={_today} />

      <AppDivider />

      <GroupedNotifications groupLabel="Yesterday" notifications={_yesterday} />

      <AppDivider />

      <GroupedNotifications groupLabel="This Week" notifications={_thisWeek} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: APP_CONSTANTS.APP_SPACING,
  },
});
