import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CameraScreen from "./screens/CameraScreen";
import HomeScreen from "./screens/HomeScreen";
import PreviewScreen from "./screens/PreviewScreen";

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <HomeStack.Navigator initialRouteName="Camera">
          <HomeStack.Screen name="Home" component={HomeScreen} />
          <HomeStack.Screen name="Camera" component={CameraScreen} />
          <HomeStack.Screen name="Preview" component={PreviewScreen} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
});
