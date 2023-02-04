import { StyleSheet, Text, View } from "react-native";
import { APP_CONSTANTS } from "../../common/constants";

const NotificationItem = ({ notification }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.regNo}>{notification.regNo}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          <Text style={styles.action}>{notification?.action} </Text>
          {notification.address}
          <Text style={styles.date}> {notification.date} </Text>
        </Text>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: APP_CONSTANTS.APP_SPACING,
  },
  regNo: {
    color: "gray",
    fontSize: 12,
    textTransform: "uppercase",
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  content: {
    fontSize: 16,
  },
  action: {
    fontWeight: "500",
  },
  date: {
    fontSize: 12,
    color: "lightgray",
    paddingLeft: 5,
  },
});
