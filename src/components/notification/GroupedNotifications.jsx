import { StyleSheet, Text, View } from "react-native";

import NotificationItem from "./NotificationItem";
import SecondaryText from "../shared/SecondaryText";
import { APP_CONSTANTS } from "../../common/constants";

const GroupedNotifications = ({ groupLabel = "Group", notifications }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <SecondaryText>{groupLabel}</SecondaryText>
      </View>

      {notifications.map((el) => (
        <NotificationItem notification={el} />
      ))}
    </View>
  );
};

export default GroupedNotifications;

const styles = StyleSheet.create({
  container: { marginBottom: APP_CONSTANTS.APP_SPACING },
  label: { marginBottom: APP_CONSTANTS.APP_SPACING },
});
