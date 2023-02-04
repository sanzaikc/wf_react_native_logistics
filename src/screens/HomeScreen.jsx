import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import QRSearch from "../components/home/QRSearch";
import RecentShipping from "../components/home/RecentShipping";
import UserInfo from "../components/home/UserInfo";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar auto />

      <ScrollView>
        <UserInfo />

        <QRSearch />

        <RecentShipping />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
