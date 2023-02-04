import { StyleSheet, Text, View } from "react-native";
import { APP_CONSTANTS } from "../common/constants";
import NotificationItem from "../components/notification/NotificationItem";

const NotificationScreens = () => {
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
      address: "Iplex Mall Baneshwor, Remax Nepal 44123",
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

  return (
    <View style={styles.container}>
      {_today.map((el) => (
        <NotificationItem notification={el} />
      ))}
    </View>
  );
};

export default NotificationScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: APP_CONSTANTS.APP_SPACING,
  },
});
