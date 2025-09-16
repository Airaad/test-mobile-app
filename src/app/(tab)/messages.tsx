import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import MessageTopNavigation from "../../components/MessageTopNavigation";
import MessageComponent from "../../components/MessageComponent";

const MessagesScreen = () => {
  const [route, setRoute] = useState<"all" | "travelling" | "support">("all");

  const handleClick = (path: "all" | "travelling" | "support") => {
    setRoute(path);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.topContainer}>
        <View style={styles.iconContainer}>
          <EvilIcons name="search" size={24} color="black" />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </View>
      </View>
      <View style={{ paddingTop: 20, paddingLeft: 20 }}>
        <Text style={{ fontSize: 35, fontWeight: "500", marginBottom: 18 }}>
          Messages
        </Text>
        <MessageTopNavigation handleClick={handleClick} />
      </View>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {route === "all" ? (
          <MessageComponent />
        ) : route === "travelling" ? (
          <MessageComponent />
        ) : (
          <MessageComponent />
        )}
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: 30,
    gap: 20,
  },

  iconContainer: {
    backgroundColor: "#f3f4f6",
    padding: 8,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
