import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

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
    </ScrollView>
  );
};

export default Channel;
