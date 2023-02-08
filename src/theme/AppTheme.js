import { DefaultTheme } from "@react-navigation/native";

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgb(255, 255 , 255)",
    card: "rgb(251, 251, 251)",
    primary: "rgb(255, 45, 85)",
  },
};

export default AppTheme;
