import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

const MyCamera = () => {
  const navigation = useNavigation();
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    const getPermissionsAsync = async () => {
      // 1. Camera roll Permission
      if (Platform.OS === "ios") {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // if (status !== "granted") {
        //   alert("Sorry, we need camera roll permissions to make this work!");
        // }
      }
      // 2. Camera Permission
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === "granted");
    };
    getPermissionsAsync();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              // Select an image from gallery
              const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
              });
              navigation.navigate("Preview", { image: result });
            }}
          >
            <Ionicons
              name="ios-photos"
              style={{ color: "#fff", fontSize: 35 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              // Take a picture now
              if (cameraRef) {
                const result = await cameraRef.current.takePictureAsync();
                navigation.navigate("Preview", { image: result });
              }
            }}
          >
            <Ionicons
              name="ios-camera"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Ionicons
              name="ios-reverse-camera"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default MyCamera;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    alignItems: "center",
  },
});
