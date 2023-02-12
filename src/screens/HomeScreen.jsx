import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import RecentShipping from "../components/home/RecentShipping";
import SearchBar from "../components/home/SearchBar";
import UserInfo from "../components/home/UserInfo";
import AppView from "../components/shared/AppView";

const HomeScreen = () => {
  return (
    <AppView style={styles.container}>
      <StatusBar auto />

      <ScrollView>
        <UserInfo />

        <SearchBar />

        <RecentShipping />
      </ScrollView>
    </AppView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});
