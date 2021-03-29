import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as something from "stripe-react-native";
console.log(something);
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!💻</Text>
      <Button
        title="Press to throw"
        onPress={() => {
          throw new Error("yippeee");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
