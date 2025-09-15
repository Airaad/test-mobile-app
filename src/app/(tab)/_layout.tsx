import { Tabs } from "expo-router";
import {
  Feather,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF385C",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlists",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="trips"
        options={{
          title: "Trips",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="airbnb" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="message" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          title: "Log In",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
