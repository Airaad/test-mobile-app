import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import listingData from "../../data/listings.json";
import listingData2 from "../../data/lisitngs2.json";
import {
  Feather,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

const ListingInfo = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const listingItem = listingData.find((item) => item.id === id);
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* Image Section */}
      <ImageBackground
        source={{ uri: listingItem?.imageUri }}
        style={{ height: 400 }}
      >
        <View style={styles.iconContainer}>
          <Pressable onPress={() => router.back()} style={styles.iconCircle}>
            <Ionicons name="arrow-back-outline" size={25} color="black" />
          </Pressable>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 9 }}>
            <Pressable style={styles.iconCircle}>
              <Ionicons name="share-social-outline" size={25} color="black" />
            </Pressable>

            <Pressable style={styles.iconCircle}>
              <Ionicons name="heart-outline" size={25} color="black" />
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      {/* Info Section */}
      <View style={styles.infoContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "600" }}>
            {listingItem?.title}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400", marginTop: 20 }}>
            Private room in home in Bangalore Urban, India
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>
            1 guest . 1 bedroom . 1 private bathroom
          </Text>

          {/* Review Section */}
          <View style={styles.reviewContainer}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.reviewText}>{listingItem?.rating}</Text>
              <View style={{ flexDirection: "row" }}>
                {listingItem &&
                  Array.from({ length: Math.round(listingItem?.rating) }).map(
                    (_, i) => (
                      <Ionicons key={i} name="star" size={12} color="black" />
                    )
                  )}
              </View>
            </View>
            <View style={styles.reviewSeperator} />
            <Text style={styles.reviewText}>Guest favourite</Text>
            <View style={styles.reviewSeperator} />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.reviewText}>{listingItem?.totalReviews}</Text>
              <Text style={{ fontSize: 14, fontWeight: "500" }}>Reviews</Text>
            </View>
          </View>
        </View>

        <View style={styles.separatorLine} />
        {/* Host Section */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1757517371699-3a2ce58688db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ height: 50, width: 50, borderRadius: 50 }}
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Stay with Vivekanand
            </Text>
            <Text>Superhost . 2 years hosting</Text>
          </View>
        </View>

        <View style={styles.separatorLine} />

        {/* Features Section */}
        <View style={{ gap: 30 }}>
          <View style={styles.featureContainer}>
            <Ionicons name="key-outline" size={24} color="black" />
            <View style={{ marginRight: 50 }}>
              <Text>Exceptional check-in experience</Text>
              <Text>
                Recent guests gave the check-in process a 5-star rating.
              </Text>
            </View>
          </View>

          <View style={styles.featureContainer}>
            <Octicons name="sponsor-tiers" size={24} color="black" />
            <View style={{ marginRight: 50 }}>
              <Text>Vivekanand is a Superhost</Text>
              <Text>Superhosts are experienced, highly rated Hosts.</Text>
            </View>
          </View>

          <View style={styles.featureContainer}>
            <FontAwesome6 name="house-chimney" size={24} color="black" />
            <View style={{ marginRight: 50 }}>
              <Text>Room in a rental unit</Text>
              <Text>
                Your own room in a home, plus access to shared spaces.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.separatorLine} />

        {/* About Section */}

        <View>
          <Text style={{ fontSize: 23, fontWeight: "500" }}>
            About this place
          </Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical...
          </Text>
          <Pressable style={styles.showMoreButton}>
            <Text style={{ color: "black", fontSize: 16 }}>Show more</Text>
          </Pressable>
        </View>

        <View style={styles.separatorLine} />

        {/* Amenities Section */}
        <View style={{ gap: 20 }}>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <MaterialCommunityIcons
              name="door-closed-lock"
              size={24}
              color="black"
            />
            <Text style={{ fontSize: 16 }}>Lock on bedroom door</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <FontAwesome6 name="kitchen-set" size={24} color="black" />
            <Text style={{ fontSize: 16 }}>Kitchen</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <Feather name="wifi" size={24} color="black" />
            <Text style={{ fontSize: 16 }}>Wifi</Text>
          </View>

          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <MaterialIcons name="pets" size={24} color="black" />
            <Text style={{ fontSize: 16 }}>Pets allowed</Text>
          </View>

          <Pressable style={styles.showMoreButton}>
            <Text style={{ color: "black", fontSize: 16 }}>
              Show all 30 amenities
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default ListingInfo;

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  iconCircle: {
    backgroundColor: "#f9fafb",
    padding: 4,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  infoContainer: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    transform: [{ translateY: -60 }],
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginTop: 25,
  },
  reviewText: {
    fontSize: 20,
    fontWeight: "500",
  },
  reviewSeperator: {
    height: 50,
    width: 1,
    backgroundColor: "#9ca3af",
  },
  separatorLine: {
    height: 1,
    backgroundColor: "#9ca3af",
    marginVertical: 18,
  },
  featureContainer: {
    flexDirection: "row",
    gap: 20,
  },
  showMoreButton: {
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 15,
  },
});
