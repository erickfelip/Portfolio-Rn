import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Projects from "../screens/Projects";
import Home from "../screens/Home";
import Imc from "../components/ImcCalculator";
import Pokelist from "../components/Pokelist"

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="Imc" component={Imc} />
        <Stack.Screen name="Pokelist" component={Pokelist} />
        <Stack.Screen name="Projects" component={Projects} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
