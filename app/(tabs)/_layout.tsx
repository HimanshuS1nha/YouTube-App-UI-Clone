import { router, Tabs } from "expo-router";
import React from "react";
import { Image, Pressable, View } from "react-native";
import tw from "twrnc";
import {
  Ionicons,
  Fontisto,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

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
          headerLeft: () => {
            return (
              <Image
                source={require("../../assets/images/yt-logo.png")}
                style={tw`w-28 h-9 ml-2`}
                resizeMode="stretch"
              />
            );
          },
          headerRight: () => {
            return (
              <View style={tw`mr-2 flex-row items-center gap-x-7`}>
                <FontAwesome5 name="chromecast" size={24} color="black" />
                <FontAwesome name="bell-o" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
              </View>
            );
          },
          headerTitle: "",
        }}
      />

      <Tabs.Screen
        name="shorts"
        options={{
          title: "Shorts",
          headerTitle: "",
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
          headerRight: () => {
            return (
              <View style={tw`mr-2 flex-row items-center gap-x-7`}>
                <AntDesign name="search1" size={24} color="black" />
                <Ionicons
                  name="ellipsis-vertical-sharp"
                  size={24}
                  color="black"
                />
              </View>
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
          headerLeft: () => {
            return (
              <Image
                source={require("../../assets/images/yt-logo.png")}
                style={tw`w-28 h-9 ml-2`}
                resizeMode="stretch"
              />
            );
          },
          headerRight: () => {
            return (
              <View style={tw`mr-2 flex-row items-center gap-x-7`}>
                <FontAwesome5 name="chromecast" size={24} color="black" />
                <FontAwesome name="bell-o" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
              </View>
            );
          },
          headerTitle: "",
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
          headerRight: () => {
            return (
              <View style={tw`mr-2 flex-row items-center gap-x-7`}>
                <FontAwesome5 name="chromecast" size={24} color="black" />
                <FontAwesome name="bell-o" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
                <Ionicons name="settings-outline" size={24} color="black" />
              </View>
            );
          },
          headerTitle: "",
        }}
      />

      <Tabs.Screen
        name="my-channel"
        options={{
          tabBarButton: () => null,
          title: "Coding Change",
          headerRight: () => {
            return (
              <View style={tw`mr-2 flex-row items-center gap-x-7`}>
                <FontAwesome5 name="chromecast" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
                <Ionicons
                  name="ellipsis-vertical-sharp"
                  size={24}
                  color="black"
                />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <Pressable
                style={tw`ml-3.5`}
                onPress={() => router.push("/profile")}
              >
                <Feather name="arrow-left" size={24} color="black" />
              </Pressable>
            );
          },
        }}
      />

      <Tabs.Screen
        name="channel"
        options={{
          tabBarButton: () => null,
          title: "Random React Channel",
          headerRight: () => {
            return (
              <View style={tw`mr-2 flex-row items-center gap-x-5.5`}>
                <FontAwesome5 name="chromecast" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
                <Ionicons
                  name="ellipsis-vertical-sharp"
                  size={24}
                  color="black"
                />
              </View>
            );
          },
          headerLeft: () => {
            return (
              <Pressable
                style={tw`ml-3.5`}
                onPress={() => router.push("/video")}
              >
                <Feather name="arrow-left" size={24} color="black" />
              </Pressable>
            );
          },
        }}
      />

      <Tabs.Screen
        name="analytics"
        options={{
          tabBarButton: () => null,
          title: "",
          headerLeft: () => {
            return (
              <Pressable
                style={tw`ml-3.5`}
                onPress={() => router.push("/profile")}
              >
                <Feather name="arrow-left" size={24} color="black" />
              </Pressable>
            );
          },
          headerRight: () => (
            <Ionicons
              name="ellipsis-vertical-sharp"
              size={24}
              color="black"
              style={tw`mr-2`}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
