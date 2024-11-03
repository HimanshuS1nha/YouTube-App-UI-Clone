import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  FontAwesome,
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { videos } from "@/constants/videos";

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

  const playListSectionItems = [
    {
      title: "Liked Videos",
      Icon: AntDesign,
      iconName: "like1",
      value: "7M",
      color: "#09152b",
      secondaryColor: "#9399a9",
    },
    {
      title: "Watch later",
      Icon: FontAwesome6,
      iconName: "clock",
      value: "0",
      color: "#525252",
      secondaryColor: "#898989",
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

      <View style={tw`mt-6 px-4 gap-y-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-lg font-bold`}>History</Text>
          <Pressable style={tw`rounded-full border border-gray-300 px-3 py-2`}>
            <Text style={tw`text-xs font-medium`}>View all</Text>
          </Pressable>
        </View>

        <ScrollView
          contentContainerStyle={tw`gap-x-4`}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {videos.map((video) => {
            return (
              <View key={video.title} style={tw`gap-y-1 w-40`}>
                <Image
                  source={{ uri: video.image }}
                  style={tw`h-20 w-full rounded-xl`}
                  resizeMode="stretch"
                />
                <View style={tw`flex-row justify-between`}>
                  <Text style={tw`text-base font-semibold w-[90%]`}>
                    {video.title.substring(0, 20)}...
                  </Text>
                  <Ionicons
                    name="ellipsis-vertical-sharp"
                    size={20}
                    color="black"
                    style={tw`mt-1`}
                  />
                </View>
                <Text style={tw`text-gray-700 text-xs`}>
                  {video.channelName}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={tw`mt-6 px-4 gap-y-1`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`text-lg font-bold`}>Playlists</Text>
          <View style={tw`flex-row gap-x-4 items-center`}>
            <AntDesign name="plus" size={24} color="black" />
            <Pressable
              style={tw`rounded-full border border-gray-300 px-3 py-2`}
            >
              <Text style={tw`text-xs font-medium`}>View all</Text>
            </Pressable>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={tw`gap-x-4 pt-3`}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {playListSectionItems.map((item) => {
            return (
              <View style={tw`gap-y-1 w-40`} key={item.title}>
                <View
                  style={tw`w-full h-20 bg-[${item.color}] rounded-xl border-2 border-white z-20 items-center justify-center gap-y-2`}
                >
                  <item.Icon
                    name={item.iconName as never}
                    color={"white"}
                    size={20}
                  />
                  <Text style={tw`text-white`}>{item.value}</Text>
                </View>
                <View
                  style={tw`w-[95%] h-20 bg-[${item.secondaryColor}] rounded-xl absolute -top-[6%] z-10 left-[2.5%]`}
                />

                <View style={tw`ml-1`}>
                  <Text style={tw`font-semibold text-base`}>{item.title}</Text>
                  <Text style={tw`text-gray-700`}>Private</Text>
                </View>
              </View>
            );
          })}

          <View style={tw`gap-y-1 w-40`}>
            <View style={tw`w-40 h-20 items-center justify-center`}>
              <View
                style={tw`w-16 h-16 items-center justify-center bg-gray-200 rounded-full`}
              >
                <AntDesign name="plus" size={24} color="black" />
              </View>
            </View>

            <Text style={tw`font-semibold text-base text-center`}>
              New playlist
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
