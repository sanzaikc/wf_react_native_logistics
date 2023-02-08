import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

import RootNavigator from "./src/navigators/RootNavigator";

import useAppTheme from "./src/hooks/useAppTheme";

export default function App() {
  const { appTheme } = useAppTheme();

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

  return (
    <NavigationContainer theme={appTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
