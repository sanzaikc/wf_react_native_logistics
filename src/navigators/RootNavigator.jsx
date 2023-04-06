import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { APP_FONT_WEIGHTS } from "../constants/appConstants";
import { NAVIGATION_ROUTES } from "../constants/navigationRoutes";

import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ShippingDetailScreen from "../screens/ShippingDetailScreen";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={NAVIGATION_ROUTES.HOME}
      screenOptions={{
        headerTitleStyle: { fontFamily: APP_FONT_WEIGHTS.BOLD },
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
      <RootStack.Screen
        name={NAVIGATION_ROUTES.SHIPPING_DETAIL}
        component={ShippingDetailScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
