import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: "cyan",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    color: "#FFFFFF",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </View>
  );
};

export default App;
