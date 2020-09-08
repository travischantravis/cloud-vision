import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { CLOUD_VISION_API_KEY } from "../environment";

const ImageLabels = (props) => {
  const { image } = props;
  console.log(image);

  const submitToGoogle = async () => {
    try {
      const body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "LABEL_DETECTION", maxResults: 10 },
              { type: "LANDMARK_DETECTION", maxResults: 5 },
              { type: "FACE_DETECTION", maxResults: 5 },
              { type: "LOGO_DETECTION", maxResults: 5 },
              { type: "TEXT_DETECTION", maxResults: 5 },
              { type: "DOCUMENT_TEXT_DETECTION", maxResults: 5 },
              { type: "SAFE_SEARCH_DETECTION", maxResults: 5 },
              { type: "IMAGE_PROPERTIES", maxResults: 5 },
              { type: "CROP_HINTS", maxResults: 5 },
              { type: "WEB_DETECTION", maxResults: 5 },
            ],
            image: {
              source: {
                imageUri: image.uri,
              },
            },
          },
        ],
      });
      const response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=" +
          CLOUD_VISION_API_KEY,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: body,
        }
      );
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button
        style={{ marginBottom: 10 }}
        onPress={() => submitToGoogle()}
        title="Analyze!"
      />
      <Text></Text>
    </View>
  );
};

export default ImageLabels;

const styles = StyleSheet.create({});
