import { StyleSheet } from "react-native";

import AppDivider from "../components/shared/AppDivider";
import AppView from "../components/shared/AppView";
import GroupedNotifications from "../components/notification/GroupedNotifications";

import { APP_CONSTANTS } from "../constants/appConstants";

const NotificationScreen = () => {
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
    <AppView style={styles.container}>
      <GroupedNotifications groupLabel="Today" notifications={_today} />

      <AppDivider />

      <GroupedNotifications groupLabel="Yesterday" notifications={_yesterday} />

      <AppDivider />

      <GroupedNotifications groupLabel="This Week" notifications={_thisWeek} />
    </AppView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    padding: APP_CONSTANTS.APP_SPACING,
  },
});
