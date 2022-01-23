import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Projects from "../screens/Projects";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      {/*       <Stack.Screen name="Projects" component={Projects} /> */}
      <Stack.Group
        screenOptions={{ presentation: "modal", transparentCard: true }}
      >
        <Stack.Screen name="Projects" component={Projects} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
