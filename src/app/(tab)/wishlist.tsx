import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";

const WishlistScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ paddingTop: 40, paddingLeft: 20 }}>
        <Text style={{ fontSize: 35, fontWeight: "500" }}>Wishlists</Text>
        <View style={styles.wishBox}>
          <FontAwesome6 name="clock-rotate-left" size={55} color="white" />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 10 }}>
          Recently viewed
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  wishBox: {
    backgroundColor: "gray",
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 180,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
