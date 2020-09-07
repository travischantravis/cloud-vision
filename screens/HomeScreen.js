import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Take a photo</Text>
      <TouchableOpacity
        style={{
          alignSelf: "flex-start",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
        onPress={() => {
          navigation.navigate("Camera", {});
        }}
      >
        <FontAwesome name="camera" style={{ color: "#fff", fontSize: 40 }} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
