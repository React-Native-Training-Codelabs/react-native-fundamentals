import React from "react";
import { Button, View } from "react-native";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  touchableView: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "blue",
    fontSize: 18,
  },
});

export default () => {
  return (
    <View style={styles.container}>
      <Button
        title="Button 1"
        onPress={() => {
          alert("hello!");
        }}
      />
      <TouchableOpacity
        style={styles.touchableView}
        onPress={() => {
          alert("hello");
        }}
      >
        <Text style={styles.text}>Capture Taps</Text>
      </TouchableOpacity>
    </View>
  );
};
