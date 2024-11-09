import { View, Text } from "react-native";
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
    </SafeAreaView>
  );
};

export default VideoPage;
