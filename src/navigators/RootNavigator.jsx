import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NAVIGATION_ROUTES } from "../constants/navigationRoutes";

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
        name={NAVIGATION_ROUTES.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={NAVIGATION_ROUTES.NOTIFICATION}
        component={NotificationScreen}
      />
      <RootStack.Screen
        name={NAVIGATION_ROUTES.PROFILE}
        component={ProfileScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
