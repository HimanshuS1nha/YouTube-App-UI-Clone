import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  Octicons,
  Ionicons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import VideoPreview from "@/components/VideoPreview";

import { videos } from "@/constants/videos";

const VideoPage = () => {
  const isFocused = useIsFocused();
  return (
    <>
      <SafeAreaView>
        <View style={tw`h-[300px] bg-black`}>
          {isFocused && (
            <Video
              source={require("../../assets/videos/video-2.mp4")}
              style={tw`w-full h-full`}
              resizeMode={ResizeMode.STRETCH}
              shouldPlay
              isLooping
            />
          )}
          <View
            style={tw`absolute w-full top-1 px-3 flex-row justify-between items-center`}
          >
            <Pressable onPress={router.back}>
              <AntDesign name="down" size={17} color={"white"} />
            </Pressable>
            <View style={tw`flex-row gap-x-5 items-center`}>
              <View style={tw`items-center`}>
                <View style={tw`bg-gray-600 w-10 h-4 rounded-full`} />
                <AntDesign
                  name="play"
                  size={22}
                  color="white"
                  style={tw`absolute right-0 -top-0.5`}
                />
              </View>
              <FontAwesome5 name="chromecast" size={22} color="white" />
              <MaterialCommunityIcons
                name="closed-caption-outline"
                size={22}
                color="white"
              />
              <Ionicons name="settings-outline" size={22} color="white" />
            </View>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={tw`gap-y-3.5`}
          showsVerticalScrollIndicator={false}
        >
          <View style={tw`pt-2 px-3 gap-y-3.5`}>
            <View style={tw`gap-y-2`}>
              <Text style={tw`text-lg font-bold`}>
                Full Stack Ecommerce Website Using React.js, MongoDB and
                Express.js
              </Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-gray-700`}>
                  6.4M views 3 months ago #ai ...
                </Text>
                <Text style={tw`font-bold`}>more</Text>
              </View>
            </View>

            <Pressable
              style={tw`flex-row justify-between items-center`}
              onPress={() => router.replace("/channel")}
            >
              <View style={tw`flex-row gap-x-3 items-center`}>
                <Image
                  source={require("../../assets/images/react-logo.webp")}
                  style={tw`w-8 h-8 rounded-full`}
                />
                <Text style={tw`font-bold`}>Random React Channel</Text>
                <Text style={tw`text-gray-700`}>30K</Text>
              </View>

              <Pressable style={tw`bg-black px-2.5 py-2 rounded-full`}>
                <Text style={tw`text-white text-xs`}>Subscribe</Text>
              </Pressable>
            </Pressable>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={tw`gap-x-2.5`}
            >
              <View
                style={tw`flex-row gap-x-4 items-center rounded-full px-4 py-2.5 bg-gray-200/70`}
              >
                <View
                  style={tw`flex-row gap-x-3 items-center border-r border-r-gray-300 pr-3`}
                >
                  <AntDesign name="like2" size={16} />
                  <Text>17K</Text>
                </View>
                <AntDesign
                  name="dislike2"
                  size={16}
                  style={{ transform: [{ rotateY: "180deg" }] }}
                />
              </View>
              <View
                style={tw`flex-row gap-x-2 items-center rounded-full px-4 py-2.5 bg-gray-200/70`}
              >
                <MaterialCommunityIcons name="share-outline" size={16} />
                <Text style={tw`font-semibold`}>Share</Text>
              </View>
              <View
                style={tw`flex-row gap-x-2 items-center rounded-full px-4 py-2.5 bg-gray-200/70`}
              >
                <AntDesign name="youtube" size={16} />
                <Text style={tw`font-semibold`}>Remix</Text>
              </View>
              <View
                style={tw`flex-row gap-x-2 items-center rounded-full px-4 py-2.5 bg-gray-200/70`}
              >
                <Octicons name="download" size={16} />
                <Text style={tw`font-semibold`}>Download</Text>
              </View>
              <View
                style={tw`flex-row gap-x-2 items-center rounded-full px-4 py-2.5 bg-gray-200/70`}
              >
                <FontAwesome name="scissors" size={16} color="black" />
                <Text style={tw`font-semibold`}>Clip</Text>
              </View>
              <View
                style={tw`flex-row gap-x-2 items-center rounded-full px-4 py-2.5 bg-gray-200/70`}
              >
                <FontAwesome name="bookmark-o" size={16} />
                <Text style={tw`font-semibold`}>Save</Text>
              </View>
              <View
                style={tw`flex-row gap-x-2 items-center rounded-full px-4 py-2.5 bg-gray-200/70`}
              >
                <FontAwesome6 name="flag" size={16} color="black" />
                <Text style={tw`font-semibold`}>Report</Text>
              </View>
            </ScrollView>

            <View style={tw`bg-gray-200/70 p-3 rounded-xl gap-y-2`}>
              <View style={tw`flex-row justify-between items-center`}>
                <View style={tw`flex-row gap-x-2 items-center`}>
                  <Text style={tw`font-bold`}>Comments</Text>
                  <Text>10K</Text>
                </View>
                <View style={tw`flex-row gap-x-1 items-center`}>
                  <View style={tw`size-2 rounded-full bg-black`} />
                  <View style={tw`size-2 rounded-full bg-gray-300`} />
                </View>
              </View>

              <View style={tw`flex-row gap-x-3 items-center`}>
                <Image
                  source={require("../../assets/images/channel-logo.png")}
                  style={tw`w-5.5 h-5.5 rounded-full`}
                />
                <Text style={tw`text-xs font-medium`}>
                  Amazing tutorial. Learnt a lot from it.
                </Text>
              </View>
            </View>
          </View>

          <View style={tw`mt-3 gap-y-6`}>
            {videos.map((video) => {
              return <VideoPreview key={video.title} video={video} />;
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" backgroundColor="#000" />
    </>
  );
};

export default VideoPage;
