import { StyleSheet, Text, View } from "react-native";

import { APP_CONSTANTS } from "../../common/constants";

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}></View>

      <View style={styles.userDetailContainer}>
        <Text style={styles.userName}>Hi, John Doe!</Text>

        <Text style={styles.userSubtitle}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>

      <View style={styles.notification}></View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    padding: APP_CONSTANTS.APP_SPACING,
  },

  avatar: {
    flexShrink: 0,
    borderRadius: APP_CONSTANTS.APP_BORDER_RADIUS,
    height: 60,
    width: 60,
    backgroundColor: "lightpink",
  },
  notification: {
    flexShrink: 0,
    borderRadius: APP_CONSTANTS.APP_BORDER_RADIUS,
    height: 40,
    width: 40,
    backgroundColor: "skyblue",
  },
  userDetailContainer: {
    flexGrow: 1,
    justifyContent: "center",
    marginHorizontal: APP_CONSTANTS.APP_SPACING * 0.9,
    maxWidth: "100%",
  },
  userName: { fontSize: 22, fontWeight: "500", marginTop: -5 },
  userSubtitle: { fontSize: 12, color: "gray" },
});
