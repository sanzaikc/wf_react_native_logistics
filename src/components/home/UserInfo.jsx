import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useTheme } from "@react-navigation/native";

import { APP_CONSTANTS } from "../../constants/appConstants";
import { NAVIGATION_CONSTANTS } from "../../constants/navigationConstants";

import AppText from "../shared/AppText";

const UserInfo = () => {
  const navigation = useNavigation();

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(NAVIGATION_CONSTANTS.PROFILE)}
      >
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/300" }}
        />
      </TouchableOpacity>

      <View style={styles.userDetailContainer}>
        <AppText style={styles.userName}>Hi, Username!</AppText>

        <AppText style={styles.userSubtitle}>
          Lorem ipsum dolor sit amet consectetur.
        </AppText>
      </View>

      <TouchableOpacity
        style={styles.notification}
        onPress={() => navigation.navigate(NAVIGATION_CONSTANTS.NOTIFICATION)}
      >
        <Ionicons
          name="md-notifications-outline"
          size={APP_CONSTANTS.APP_ICON_SIZE}
          color={colors.text}
        />
        <View
          style={[
            styles.notificationIndicator,
            { backgroundColor: colors.notification },
          ]}
        />
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
    fontSize: 24,
    fontWeight: "500",
    marginTop: -5,
  },
  userSubtitle: {
    fontSize: 12,
    color: "gray",
  },
});
