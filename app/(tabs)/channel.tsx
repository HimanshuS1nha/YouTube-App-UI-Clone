import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import VideoPreview from "@/components/VideoPreview";
import { videos } from "@/constants/videos";

const Channel = () => {
  return (
    <ScrollView contentContainerStyle={tw`bg-white`}>
      <View style={tw`gap-y-2.5 px-3`}>
        <View style={tw`h-[150px]`}>
          <Image
            source={require("../../assets/images/react-banner.png")}
            resizeMode="cover"
            style={tw`w-full h-full rounded-2xl`}
          />
        </View>

        <View style={tw`flex-row gap-x-3 items-center`}>
          <Image
            source={require("../../assets/images/react-logo.webp")}
            style={tw`size-16 rounded-full`}
          />

          <View>
            <Text style={tw`font-bold text-2xl`}>Random React Channel</Text>
            <Text style={tw`font-semibold`}>@RandomReactChannel</Text>
            <Text style={tw`text-gray-700`}>50K subscribers • 500 videos</Text>
          </View>
        </View>

        <View style={tw`flex-row justify-between items-center mt-1.5`}>
          <Text style={tw`text-gray-700 w-[90%] text-xs`}>
            Welcome to Random React Channel. Enjoy the content that is posted on
            the channel.
          </Text>
          <AntDesign name="right" size={18} color={"gray"} />
        </View>

        <View style={tw`flex-row gap-x-2 mt-1.5`}>
          <Pressable
            style={tw`bg-black w-[48%] items-center py-2 rounded-full`}
          >
            <Text style={tw`text-white`}>Subscribe</Text>
          </Pressable>
          <Pressable
            style={tw`bg-[#f2f2f2] w-[48%] items-center py-2 rounded-full`}
          >
            <Text style={tw`text-black font-medium`}>Join</Text>
          </Pressable>
        </View>
      </View>

      <View style={tw`gap-y-2`}>
        <View
          style={tw`mt-5.5 px-4 flex-row gap-x-6 border-b-[0.5px] border-b-gray-300`}
        >
          <Pressable style={tw`pb-3 border-b-2`}>
            <Text style={tw`text-base font-semibold`}>Home</Text>
          </Pressable>
          <Pressable style={tw`pb-3`}>
            <Text style={tw`text-base`}>Videos</Text>
          </Pressable>
          <Pressable style={tw`pb-3`}>
            <Text style={tw`text-base`}>Playlists</Text>
          </Pressable>
        </View>

        <VideoPreview
          video={{
            title:
              "Full Stack Ecommerce Website Using React.js, MongoDB and Express.js",
            image:
              "https://images.pexels.com/photos/5082237/pexels-photo-5082237.jpeg?auto=compress&cs=tinysrgb&w=600",
            channelImage: require("../../assets/images/react-logo.webp"),
            channelName: "Random React Channel",
            uploadedAt: "4 months ago",
            views: "20K",
            duration: "4:26:18",
          }}
        />

        <View style={tw`gap-y-3 px-3 mt-4`}>
          <Text style={tw`font-semibold text-base`}>Videos</Text>
          <View style={tw`gap-y-3`}>
            {videos.map((video) => {
              return (
                <View key={video.title} style={tw`flex-row gap-x-2`}>
                  <Image
                    source={{ uri: video.image }}
                    style={tw`w-44 h-24 rounded-lg`}
                  />

                  <View style={tw`w-[54%]`}>
                    <View style={tw`flex-row justify-between`}>
                      <Text style={tw`font-semibold w-[90%]`}>
                        {video.title}
                      </Text>
                      <Ionicons
                        name="ellipsis-vertical-sharp"
                        size={20}
                        color="black"
                        style={tw`mt-1`}
                      />
                    </View>
                    <Text style={tw`text-gray-700 text-xs`}>
                      {video.views} views • {video.uploadedAt}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Channel;
