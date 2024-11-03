import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const Profile = () => {
  const menuOptions = [
    {
      Icon: MaterialIcons,
      iconName: "switch-account",
      title: "Switch account",
      size: 16,
    },
    {
      Icon: AntDesign,
      iconName: "google",
      title: "Google Account",
      size: 15,
    },
    {
      Icon: MaterialCommunityIcons,
      iconName: "incognito-circle",
      title: "Turn on Incognito",
      size: 18,
    },
    {
      Icon: FontAwesome,
      iconName: "share",
      title: "Share channel",
      size: 15,
    },
  ];
  return (
    <View style={tw`bg-white py-4`}>
      <View style={tw`px-3 flex-row gap-x-3 items-center`}>
        <Image
          source={require("../../assets/images/channel-logo.png")}
          style={tw`rounded-full w-20 h-20`}
        />

        <View style={tw`gap-y-0.5`}>
          <Text style={tw`font-bold text-2xl`}>Coding Change</Text>
          <View style={tw`flex-row items-center gap-x-1.5 items-center`}>
            <Text>@CodingChange</Text>
            <Text>•</Text>
            <View style={tw`flex-row gap-x-1 items-center`}>
              <Text style={tw`text-gray-700`}>View channel</Text>
              <AntDesign name="right" size={15} color="gray" />
            </View>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={tw`px-3 gap-x-1.5 mt-5`}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {menuOptions.map((menuOption) => {
          return (
            <View
              style={tw`bg-[#f2f2f2] py-1.5 px-3.5 rounded-full flex-row gap-x-2 items-center`}
              key={menuOption.title}
            >
              <menuOption.Icon
                name={menuOption.iconName as never}
                size={menuOption.size}
                color="black"
              />
              <Text style={tw`font-semibold`}>{menuOption.title}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={tw`mt-6 px-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-lg font-bold`}>History</Text>
          <Pressable>
            <Text>View all</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Profile;
