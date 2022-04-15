import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
// import { useFont } from "./screen";
import { Details } from "./screens/Details";
import { Home } from "./screens/Home";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Stack = createStackNavigator();
export default function App() {

  let [loaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerMode: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
