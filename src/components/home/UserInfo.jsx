import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { APP_CONSTANTS } from "../../common/constants";

import AppText from "../shared/AppText";

const UserInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: "https://i.pravatar.cc/300" }}
      />

      <View style={styles.userDetailContainer}>
        <AppText style={styles.userName}>Hi, John Doe!</AppText>

        <AppText style={styles.userSubtitle}>
          Lorem ipsum dolor sit amet consectetur.
        </AppText>
      </View>

      <TouchableOpacity
        style={styles.notification}
        onPress={() => navigation.navigate("Notification")}
      >
        <Ionicons name="md-notifications-outline" size={24} color="black" />
        <View style={styles.notificationIndicator} />
      </TouchableOpacity>
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
    position: "relative",
  },
  notificationIndicator: {
    height: 8,
    width: 8,
    backgroundColor: "red",
    borderRadius: 10 / 2,
    position: "absolute",
    right: "30%",
  },
  userDetailContainer: {
    flexGrow: 1,
    justifyContent: "center",
    marginHorizontal: APP_CONSTANTS.APP_SPACING * 0.9,
    maxWidth: "100%",
  },
  userName: {
    fontFamily: "Quicksand_700Bold",
    fontSize: 22,
    fontWeight: "500",
    marginTop: -5,
  },
  userSubtitle: {
    fontSize: 12,
    color: "gray",
  },
});
