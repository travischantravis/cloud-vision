import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImagePreview = (props) => {
  const { image } = props;

  return (
    <View>
      <Image style={styles.image} source={image} />
    </View>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  image: {
    height: 400,
    alignSelf: "center",
    // vertical image's aspect ratio
    aspectRatio: 3042 / 4032,
  },
});
