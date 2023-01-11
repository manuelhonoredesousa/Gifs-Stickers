import { StyleSheet,StatusBar } from "react-native";

export const THEME = {
  colors: {
    primary: "#a066aa",
    secondary: "#57385d",
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
    black: "#000000"
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20, 
  },
};

export const STYLES = StyleSheet.create({
  textHeading: {
    fontSize: THEME.fontSizes.lg,
    fontWeight: "bold",
    color: THEME.colors.white,
  },
  textBody: {
    fontSize: THEME.fontSizes.sm,
    color: THEME.colors.gray[100],
  },
  mainContainerWithoutDefaultHeader: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: THEME.colors.gray[600],
    flex: 1,
},
headerPadding:{
  padding: 2,
  paddingTop: 10,
  paddingBottom:10
}
});
