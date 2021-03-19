import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn:
    "https://762a0e6b564344e6912e41d44ea56ac5@o237685.ingest.sentry.io/1549119",
  enableInExpoDevelopment: true,
  debug: true,
  enableAutoSessionTracking: true,
});

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
      <Button
        title={"hi"}
        onPress={() => Sentry.Browser.captureException("helloooo")}
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
