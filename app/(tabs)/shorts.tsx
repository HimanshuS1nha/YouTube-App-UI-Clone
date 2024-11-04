import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  MaterialIcons,
  Fontisto,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";

const Shorts = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`bg-yellow-500 w-full h-[62%] mt-[20%]`}></View>

      <View style={tw`mt-5 px-3 gap-y-1.5`}>
        <View
          style={tw`flex-row items-center justify-center gap-x-1.5 bg-gray-300 py-2 w-40 rounded-full ml-1.5`}
        >
          <AntDesign name="search1" size={18} color="black" />
          <Text style={tw`text-xs`}>Search "react native"</Text>
        </View>

        <View style={tw`flex-row gap-x-2 items-center`}>
          <Image
            source={require("../../assets/images/channel-logo.png")}
            style={tw`size-8 rounded-full`}
          />
          <Text style={tw`font-medium`}>@CodingChange</Text>

          <Pressable style={tw`bg-black px-2.5 py-2 rounded-full`}>
            <Text style={tw`text-white text-xs`}>Subscribe</Text>
          </Pressable>
        </View>

        <Text style={tw`text-lg font-semibold ml-1`}>
          AI App in React Native
        </Text>

        <View style={tw`flex-row gap-x-2 items-center`}>
          <Feather name="music" size={18} color="black" />
          <Text>Some random song playing</Text>
        </View>
      </View>

      <View style={tw`absolute bottom-0 w-full flex-row`}>
        <View style={tw`w-[50%] bg-rose-600 h-1`} />
        <View style={tw`w-[50%] bg-gray-300 h-1`} />
      </View>

      <View style={tw`absolute bottom-2 right-3 gap-y-6`}>
        <View style={tw`gap-y-1 items-center`}>
          <AntDesign name="like1" size={24} color="black" />
          <Text style={tw`text-xs`}>5M</Text>
        </View>
        <View style={tw`gap-y-1 items-center`}>
          <AntDesign
            name="dislike1"
            size={24}
            color="black"
            style={{ transform: [{ rotateY: "180deg" }] }}
          />
          <Text style={tw`text-xs`}>Dislike</Text>
        </View>
        <View style={tw`gap-y-1 items-center`}>
          <MaterialIcons name="insert-comment" size={24} color="black" />
          <Text style={tw`text-xs`}>37K</Text>
        </View>
        <View style={tw`gap-y-1 items-center`}>
          <Fontisto name="share-a" size={24} color="black" />
          <Text style={tw`text-xs`}>Share</Text>
        </View>
        <View style={tw`gap-y-1 items-center`}>
          <FontAwesome6 name="arrows-rotate" size={24} color="black" />
          <Text style={tw`text-xs`}>600K</Text>
        </View>

        <Image
          source={require("../../assets/images/channel-logo.png")}
          style={tw`size-10 rounded-lg`}
        />
      </View>
    </View>
  );
};

export default Shorts;
