import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";

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
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="Notification" component={NotificationScreen} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
