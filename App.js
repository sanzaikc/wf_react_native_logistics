import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

import AppTheme from "./src/theme/AppTheme";

import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  const scheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  console.log({ DefaultTheme });

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : AppTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
