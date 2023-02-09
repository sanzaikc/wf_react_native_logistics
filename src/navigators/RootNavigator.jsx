import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NAVIGATION_CONSTANTS } from "../constants/navigationConstants";

import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleStyle: { fontFamily: "Quicksand_700Bold" },
      }}
    >
      <RootStack.Screen
        name={NAVIGATION_CONSTANTS.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={NAVIGATION_CONSTANTS.NOTIFICATION}
        component={NotificationScreen}
      />
      <RootStack.Screen
        name={NAVIGATION_CONSTANTS.PROFILE}
        component={ProfileScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
