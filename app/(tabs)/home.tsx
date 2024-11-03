import { View, Text, ScrollView, Image } from "react-native";
import React, { useMemo } from "react";
import tw from "twrnc";
import { FontAwesome5 } from "@expo/vector-icons";

import VideoPreview from "@/components/VideoPreview";

import { videos } from "@/constants/videos";
import ShortsSection from "@/components/ShortsSection";

const Home = () => {
  const menuOptions = useMemo(
    () => ["Music", "Gaming", "Live", "Cricket", "Football"],
    []
  );

  return (
    <ScrollView
      contentContainerStyle={tw`bg-white pt-1.5 pb-5`}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`px-2 gap-y-4`}>
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
        
        <ShortsSection />
      </View>

      <View style={tw`mt-6 gap-y-6`}>
        {videos.map((video) => {
          return <VideoPreview key={video.title} video={video} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
