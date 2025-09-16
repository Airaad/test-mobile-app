import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

type MessageTopNavigationProps = {
  handleClick: (path: "all" | "travelling" | "support") => void;
};

const MessageTopNavigation = ({ handleClick }: MessageTopNavigationProps) => {
  const [path, setPath] = useState("all");

  const handelPress = (pathValue: "all" | "travelling" | "support") => {
    setPath(pathValue), handleClick(pathValue);
  };

  return (
    <View style={{ flexDirection: "row", gap: 15 }}>
      <Pressable
        onPress={() => handelPress("all")}
        style={[
          styles.navigationContainer,
          { backgroundColor: path === "all" ? "black" : "#f3f4f6" },
        ]}
      >
        <Text
          style={[
            styles.navigationText,
            { color: path === "all" ? "white" : "black" },
          ]}
        >
          All
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handelPress("travelling")}
        style={[
          styles.navigationContainer,
          { backgroundColor: path === "travelling" ? "black" : "#f3f4f6" },
        ]}
      >
        <Text
          style={[
            styles.navigationText,
            { color: path === "travelling" ? "white" : "black" },
          ]}
        >
          Travelling
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handelPress("support")}
        style={[
          styles.navigationContainer,
          { backgroundColor: path === "support" ? "black" : "#f3f4f6" },
        ]}
      >
        <Text
          style={[
            styles.navigationText,
            { color: path === "support" ? "white" : "black" },
          ]}
        >
          Support
        </Text>
      </Pressable>
    </View>
  );
};

export default MessageTopNavigation;

const styles = StyleSheet.create({
  navigationContainer: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    backgroundColor: "#f3f4f6",
    borderRadius: 25,
  },
  navigationText: {
    fontWeight: "500",
  },
});
