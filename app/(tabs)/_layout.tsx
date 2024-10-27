import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import tw from "twrnc";
import { Ionicons, Fontisto } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#000",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="shorts"
        options={{
          title: "Shorts",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <Image
                    source={require("../../assets/images/yt-shorts-filled.png")}
                    style={{ width: 35, height: 35 }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/yt-shorts-outline.png")}
                    style={{ width: 35, height: 35 }}
                  />
                )}
              </>
            );
          },
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          tabBarIcon: () => {
            return (
              <View style={tw`border border-black rounded-full p-1`}>
                <Fontisto name="plus-a" size={22} color="black" />
              </View>
            );
          },
          tabBarLabelStyle: { display: "none" },
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            alert("Hello");
          },
        })}
      />

      <Tabs.Screen
        name="subscriptions"
        options={{
          title: "Subscriptions",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <Image
                    source={require("../../assets/images/yt-subscriptions-filled.png")}
                    style={{ width: 30, height: 30 }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/images/yt-subscriptions-outline.png")}
                    style={{ width: 45, height: 45 }}
                  />
                )}
              </>
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "You",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={tw`w-7 h-7 ${
                  focused ? "border-2 border-blue-600" : ""
                } rounded-full`}
              >
                <Image
                  source={require("../../assets/images/channel-logo.png")}
                  style={tw`w-full h-full rounded-full`}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
