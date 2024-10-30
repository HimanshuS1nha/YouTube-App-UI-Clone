import { View, Text, ScrollView, Image } from "react-native";
import React, { useMemo } from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";

const Home = () => {
  const menuOptions = useMemo(
    () => ["Music", "Gaming", "Live", "Cricket", "Football"],
    []
  );

  const shorts = useMemo(
    () => [
      {
        title: "AI App in React Native",
        image:
          "https://images.pexels.com/photos/15940012/pexels-photo-15940012/free-photo-of-close-up-of-a-smartphone-displaying-a-conversation-with-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        title: "Top 10 best songs of 2024",
        image:
          "https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        title: "Best moments of t20 World Cup 2024",
        image:
          "https://images.pexels.com/photos/4747326/pexels-photo-4747326.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        title: "Top goal scorers of 2024",
        image:
          "https://images.pexels.com/photos/50713/football-ball-sport-soccer-50713.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    []
  );
  return (
    <View style={tw`bg-white px-2 py-1.5 gap-y-4`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`gap-x-3`}
      >
        <View style={tw`bg-[#f2f2f2] py-1.5 px-3 rounded-lg`}>
          <FontAwesome5 name="compass" size={20} color="black" />
        </View>
        <View style={tw`bg-black py-1.5 px-3.5 rounded-lg`}>
          <Text style={tw`font-semibold text-white`}>All</Text>
        </View>

        {menuOptions.map((menuOption) => {
          return (
            <View
              style={tw`bg-[#f2f2f2] py-1.5 px-3.5 rounded-lg`}
              key={menuOption}
            >
              <Text style={tw`font-semibold`}>{menuOption}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={tw`gap-y-2.5`}>
        <View style={tw`flex-row gap-x-3 items-center ml-1`}>
          <Image
            source={require("../../assets/images/yt-shorts-red.png")}
            style={{ width: 35, height: 35 }}
          />
          <Text style={tw`font-semibold text-base`}>Shorts</Text>
        </View>

        <View
          style={tw`flex-row justify-between items-center flex-wrap gap-y-3`}
        >
          {shorts.map((short) => {
            return (
              <View key={short.title} style={tw`w-[49%] h-[260px]`}>
                <Image
                  source={{ uri: short.image }}
                  style={tw`w-full h-full rounded-lg`}
                />

                <Text
                  style={tw`text-white absolute bottom-2 left-2 font-medium w-[90%]`}
                >
                  {short.title}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Home;
