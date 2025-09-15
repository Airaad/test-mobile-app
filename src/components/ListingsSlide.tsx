import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListingItem from "./ListingItem";
import listingData from "../data/listings.json";
import { AntDesign } from "@expo/vector-icons";

const ListingsSlide = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: "500",
          }}
        >
          Popular homes in New Delhi
        </Text>
        <AntDesign name="right" size={16} color="black" />
      </View>
      <FlatList
        data={listingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListingItem listing={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default ListingsSlide;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 15,
    gap: 6,
  },
});
