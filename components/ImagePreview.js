import React from "react";
import { StyleSheet, View, Image } from "react-native";

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
    // TODO: vertical image's aspect ratio
    aspectRatio: 3 / 4,
  },
});
