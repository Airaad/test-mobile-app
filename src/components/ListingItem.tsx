import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

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
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(`/listing/${listing.id}`)}
      style={{ paddingLeft: 20, paddingRight: 7, paddingVertical: 5, gap: 5 }}
    >
      <Image
        source={{
          uri: listing.imageUri,
        }}
        style={styles.imageStyle}
      />
      <View>
        <Text style={styles.titelText}>Room in {listing.location}</Text>
        <Text style={styles.priceText}>
          ${listing.pricePerNight} for {listing.nights} nights {listing.rating}
        </Text>
      </View>
    </Pressable>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: 160,
    height: 150,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 2,
  },
  titelText: {
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 7,
  },
  priceText: {
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 7,
  },
});
