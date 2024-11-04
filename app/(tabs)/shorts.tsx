import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  MaterialIcons,
  Fontisto,
  FontAwesome6,
} from "@expo/vector-icons";

const Shorts = () => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`bg-yellow-500 w-full h-[70%] mt-[20%]`}></View>

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
