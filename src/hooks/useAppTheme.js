import React from "react";
import { useColorScheme } from "react-native";
import { DarkTheme } from "@react-navigation/native";

import AppTheme from "../theme/AppTheme";

const useAppTheme = () => {
  const [appThemeScheme, setAppThemeScheme] = React.useState("light");

  const deviceColorScheme = useColorScheme();

  const appTheme = React.useMemo(() => {
    return appThemeScheme === "dark" ? DarkTheme : AppTheme;
  }, [appThemeScheme]);

  React.useEffect(() => {
    if (!deviceColorScheme) return;

    setAppThemeScheme(deviceColorScheme);

    return () => {
      setAppThemeScheme("light");
    };
  }, [deviceColorScheme]);

  return { appTheme, appThemeScheme, setAppThemeScheme };
};

export default useAppTheme;
