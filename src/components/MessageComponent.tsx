import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MessageComponent = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="message-text-outline"
        size={35}
        color="black"
      />
      <Text style={styles.noMessageTitle}>You don't have any messages</Text>
      <Text style={styles.noMesssageParagraph}>
        When you receive a new message, it will appear here.
      </Text>
    </View>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  noMessageTitle: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },

  noMesssageParagraph: {
    fontSize: 17,
    fontWeight: "300",
    textAlign: "center",
    marginHorizontal: 30,
  },
});
