import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import ListingsSlide from "../../components/ListingsSlide";
import listingData from "../../data/listings.json";
import listingData2 from "../../data/lisitngs2.json";

const Home = () => {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Feather name="search" size={16} color="black" />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Start your search
          </Text>
        </View>
      </View>
      <ScrollView>
        <ListingsSlide title="Popular homes in New Delhi" data={listingData} />
        <ListingsSlide
          title="Available next month in Bengaluru"
          data={listingData2}
        />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 60,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  searchBox: {
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 20,
    borderRadius: 40,
    height: 50,
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
