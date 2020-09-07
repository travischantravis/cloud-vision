import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyCamera from "../components/MyCamera";

const CameraScreen = ({ navigate }) => {
  return (
    <View>
      <MyCamera />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({});
