import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const MyChannel = () => {
  return (
    <ScrollView contentContainerStyle={tw`bg-white pb-4`}>
      <View style={tw`mt-4 px-4 gap-y-3`}>
        <View style={tw`flex-row gap-x-3 items-center`}>
          <Image
            source={require("../../assets/images/channel-logo.png")}
            style={tw`rounded-full w-20 h-20`}
          />

          <View style={tw`gap-y-0.5`}>
            <Text style={tw`font-bold text-2xl`}>Coding Change</Text>
            <Text style={tw`font-medium`}>@CodingChange</Text>
            <View style={tw`flex-row items-center gap-x-1.5 items-center`}>
              <Text style={tw`text-gray-700`}>26 subscribers</Text>
              <Text style={tw`text-gray-700`}>•</Text>
              <Text style={tw`text-gray-700`}>22 videos</Text>
            </View>
          </View>
        </View>

        <Text style={tw`text-gray-700`}>
          This channel is all about educational coding content that includes
          awesome projects.
        </Text>

        <View style={tw`flex-row gap-x-3 items-center mt-1.5`}>
          <Pressable
            style={tw`bg-[#f2f2f2] w-[75%] py-2 items-center justify-center rounded-full`}
          >
            <Text style={tw`font-semibold text-base`}>Manage videos</Text>
          </Pressable>
          <Pressable
            style={tw`bg-[#f2f2f2] p-2 items-center justify-center rounded-full`}
          >
            <View style={tw`border border-black p-[0.3px]`}>
              <MaterialIcons name="bar-chart" size={18} color="black" />
            </View>
          </Pressable>
          <Pressable
            style={tw`bg-[#f2f2f2] p-2 items-center justify-center rounded-full`}
          >
            <SimpleLineIcons name="pencil" size={19} color="black" />
          </Pressable>
        </View>
      </View>

      <View style={tw`mt-5.5 px-4 flex-row gap-x-6`}>
        <Text style={tw`font-semibold text-base border-b-2 pb-3`}>Home</Text>
        <Text style={tw`text-base pb-3`}>Videos</Text>
        <Text style={tw`text-base pb-3`}>Shorts</Text>
        <Text style={tw`text-base pb-3`}>Community</Text>
      </View>
    </ScrollView>
  );
};

export default MyChannel;
