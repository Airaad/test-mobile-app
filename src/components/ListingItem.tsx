import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

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
type ListingItemProps = {
  listing: listing;
};

const ListingItem = ({ listing }: ListingItemProps) => {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 5 }}>
      <Image
        source={{
          uri: listing.imageUri,
        }}
        style={styles.imageStyle}
      />
      <Text style={styles.titelText}>Room in {listing.location}</Text>
      <Text style={styles.priceText}>
        ${listing.pricePerNight} for {listing.nights} nights {listing.rating}
      </Text>
    </View>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  titelText: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 7,
  },
  priceText: {
    fontWeight: "400",
    marginLeft: 7,
  },
});
