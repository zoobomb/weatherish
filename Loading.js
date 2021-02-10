import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' />
      <Text style={styles.text}>Getting the Weather!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    // alignItems: "center",
  },
  text: {
    color: "grey",
    fontSize: 30,
  },
});
