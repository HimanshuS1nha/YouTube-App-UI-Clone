import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const VideoPreview = ({
  video,
}: {
  video: {
    title: string;
    channelImage: string;
    channelName: string;
    image: string;
    views: string;
    uploadedAt: string;
    duration: string;
  };
}) => {
  return (
    <View style={tw`gap-y-3`}>
      <View style={tw`h-52`}>
        <Image source={{ uri: video.image }} style={tw`w-full h-full`} />

        <View style={tw`bg-[#2b2b29] absolute bottom-2 right-2 p-1 rounded`}>
          <Text style={tw`text-white font-medium text-xs`}>
            {video.duration}
          </Text>
        </View>
      </View>

      <View style={tw`px-3 flex-row justify-between`}>
        <View style={tw`flex-row gap-x-3.5`}>
          <Image
            source={video.channelImage as never}
            style={tw`w-8 h-8 rounded-full mt-1`}
            resizeMode="stretch"
          />
          <View style={tw`gap-y-1.5 w-[82%]`}>
            <Text style={tw`font-semibold w-full text-base`}>
              {video.title}
            </Text>
            <Text style={tw`text-gray-700 text-xs`}>
              {video.channelName} • {video.views} views • {video.uploadedAt}
            </Text>
          </View>
        </View>

        <Ionicons
          name="ellipsis-vertical-sharp"
          size={20}
          color="black"
          style={tw`mt-1`}
        />
      </View>
    </View>
  );
};

export default VideoPreview;
