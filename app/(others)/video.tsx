import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";

const VideoPage = () => {
  return (
    <SafeAreaView>
      <View style={tw`h-[300px] bg-black`}>
        <Video
          source={require("../../assets/videos/video-2.mp4")}
          style={tw`w-full h-full`}
          resizeMode={ResizeMode.STRETCH}
          shouldPlay
          isLooping
        ></Video>
      </View>

      <ScrollView contentContainerStyle={tw`gap-y-3.5`}>
        <View style={tw`pt-2 px-3 gap-y-3.5`}>
          <View style={tw`gap-y-2`}>
            <Text style={tw`text-lg font-bold`}>AI App in React Native</Text>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`text-gray-700`}>
                6.4M views 3 months ago #ai ...
              </Text>
              <Text style={tw`font-bold`}>more</Text>
            </View>
          </View>

          <View style={tw`flex-row justify-between items-center`}>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoPage;
