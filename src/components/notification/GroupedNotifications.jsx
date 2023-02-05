import { StyleSheet, View } from "react-native";

import { APP_CONSTANTS } from "../../common/constants";

import NotificationItem from "./NotificationItem";
import SecondaryText from "../shared/SecondaryText";

const GroupedNotifications = ({ groupLabel = "Group", notifications }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <SecondaryText>{groupLabel}</SecondaryText>
      </View>

      {notifications.map((el, index) => (
        <NotificationItem key={index} notification={el} />
      ))}
    </View>
  );
};

export default GroupedNotifications;

const styles = StyleSheet.create({
  container: { marginBottom: APP_CONSTANTS.APP_SPACING },
  label: { marginBottom: APP_CONSTANTS.APP_SPACING },
});
