import { StyleSheet, View } from "react-native";

import QRSearch from "../components/home/QRSearch";
import UserInfo from "../components/home/UserInfo";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <QRSearch />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
