import { ScrollView, StyleSheet, View } from "react-native";

import QRSearch from "../components/home/QRSearch";
import RecentShipping from "../components/home/RecentShipping";
import UserInfo from "../components/home/UserInfo";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <UserInfo />

      <QRSearch />

      <RecentShipping />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
