import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyCamera from "../components/MyCamera";

const CameraScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <MyCamera />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
