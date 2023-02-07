import { StyleSheet, View } from "react-native";

import { APP_CONSTANTS } from "../../common/constants";

import AppText from "../shared/AppText";

const NotificationItem = ({ notification }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.regNo}>{notification.regNo}</AppText>
      <View style={styles.contentContainer}>
        <AppText style={[styles.content]}>
          <AppText style={styles.action}>{notification?.action}</AppText> at{" "}
          {notification.address}
          <AppText style={styles.date}> {notification.date} </AppText>
        </AppText>
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
  content: { fontSize: 16 },
  action: {
    fontFamily: "Quicksand_600SemiBold",
  },
  date: {
    fontSize: 12,
    color: "lightgray",
    paddingLeft: 5,
  },
});
