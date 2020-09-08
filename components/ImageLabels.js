import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { v4 as uuidv4 } from "uuid";
import myFirebase from "../config/firebase";
import { CLOUD_VISION_API_KEY } from "../environment";

// Upload image to firebase
const uploadImageAsync = async (uri) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const ref = myFirebase.storage().ref().child("image");
  const snapshot = await ref.put(blob);

  blob.close();

  return await snapshot.ref.getDownloadURL();
};

// Pass image to cloud vision api
const submitToGoogle = async (uri) => {
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
              imageUri: uri,
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
    return responseJson;
  } catch (error) {
    console.log(error);
  }
};

const ImageLabels = (props) => {
  const { image } = props;
  const [labels, setLabels] = useState();

  return (
    <View>
      <Button
        style={{ marginBottom: 10 }}
        onPress={async () => {
          const firebaseUri = await uploadImageAsync(image.uri);
          console.log(firebaseUri);
          const labels = await submitToGoogle(firebaseUri);
          console.log(labels);
          setLabels(labels);
        }}
        title="Analyze!"
      />
      {labels ? <Text>{JSON.stringify(labels)}</Text> : null}
    </View>
  );
};

export default ImageLabels;

const styles = StyleSheet.create({});
