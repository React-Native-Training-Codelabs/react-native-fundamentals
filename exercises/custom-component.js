// Creating a Custom Component
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  touchableView: {
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
    color: "black",
    fontSize: 13,
  },
});

const CustomButton = ({ props }) => {
  <TouchableOpacity onPress={props.onPress} style={styles.touchableView}>
    <Text style={styles.text}>{props.text}</Text>
  </TouchableOpacity>;
};

export default () => {
  return (
    <View style={styles.container}>
      <CustomButton text="Button 1" onPress={() => alert("Hello!")} />
      <CustomButton text="Button 2" onPress={() => alert("World!")} />
    </View>
  );
};
