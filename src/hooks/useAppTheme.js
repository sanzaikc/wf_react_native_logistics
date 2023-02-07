import React from "react";
import { useColorScheme } from "react-native";
import { DarkTheme } from "@react-navigation/native";

import AppTheme from "../theme/AppTheme";

const useAppTheme = () => {
  const scheme = useColorScheme();

  const theme = React.useMemo(() => {
    return scheme === "dark" ? DarkTheme : AppTheme;
  }, [scheme]);

  return { theme };
};

export default useAppTheme;
