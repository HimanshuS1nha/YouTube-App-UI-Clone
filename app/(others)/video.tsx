import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { Video, ResizeMode } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

const VideoPage = () => {
  return (
    <SafeAreaView>
      <View style={tw`h-[300px] bg-black`}>
        {/* <Video
          source={require("../../assets/videos/video-2.mp4")}
          style={tw`w-full h-full`}
          resizeMode={ResizeMode.STRETCH}
          shouldPlay
          isLooping
        ></Video> */}
      </View>

      <ScrollView
        contentContainerStyle={tw`gap-y-3.5`}
        showsVerticalScrollIndicator={false}
      >
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
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoPage;
