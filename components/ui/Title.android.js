import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 24,
    textAlign: "center",
    borderWidth: 2,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
  },
});
