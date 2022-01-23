import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./src/screens/Home";
import theme from "./src/global/styles/theme";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#1C1C1C" barstyle="light-content" />
      <Home />
    </ThemeProvider>
  );
}
