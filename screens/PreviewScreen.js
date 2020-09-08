import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImagePreview from "../components/ImagePreview";

const PreviewScreen = ({ route }) => {
  const { image } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <ImagePreview image={image} />
    </View>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({});
