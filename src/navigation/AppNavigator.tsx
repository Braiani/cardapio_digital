import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3b82f6" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Cardápio Digital" }} />
        <Stack.Screen name="Products" component={ProductsScreen} options={({ route }: any) => ({ title: route.params.categoryName })} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: "Sobre" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
