import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const TripsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ paddingTop: 40, paddingLeft: 20 }}>
        <Text style={{ fontSize: 35, fontWeight: "500" }}>Trips</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Image
          source={require("../../../assets/trip-image.png")}
          style={{ width: 300, height: 300, marginVertical: 30 }}
        />
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Build the perfect trip
        </Text>
        <Text style={styles.paragraphText}>
          Explore homes, experiences and services.
        </Text>
        <Text style={styles.paragraphText}>
          When you book, your reservations will appear here.
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  paragraphText: {
    textAlign: "center",
    marginHorizontal: 25,
    fontSize: 16,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#F1295E",
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 19,
    fontWeight: "600",
  },
});
