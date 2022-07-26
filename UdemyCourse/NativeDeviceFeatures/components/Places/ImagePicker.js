import { Button, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutLinedButton from "../UI/OutLinedButton";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();
  async function takeImageHandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.uri);
  }
  let imagePreview = <Text>No image taken yet</Text>;
  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutLinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutLinedButton>
    </View>
  );
}
export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
