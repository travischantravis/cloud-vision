import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ImagePreview from "../components/ImagePreview";
import ImageLabels from "../components/ImageLabels";

const PreviewScreen = ({ route }) => {
  const { image } = route.params;
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <ImagePreview image={image} />
        <ImageLabels image={image} />
      </View>
    </ScrollView>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({});
