import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PreviewScreen = ({ route }) => {
  const { image } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Image style={styles.image} source={image} />
    </View>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
