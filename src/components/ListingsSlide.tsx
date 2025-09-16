import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListingItem from "./ListingItem";
import { AntDesign } from "@expo/vector-icons";

interface listing {
  id: string;
  imageUri: string;
  title: string;
  location: string;
  pricePerNight: number;
  nights: number;
  rating: number;
  totalReviews: number;
}

type listingSlideProps = {
  title: string;
  data: listing[];
};
const ListingsSlide = ({ title, data }: listingSlideProps) => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          {title}
        </Text>
        <AntDesign name="right" size={16} color="black" />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListingItem listing={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ListingsSlide;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
    gap: 6,
  },
});
