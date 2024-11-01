import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

import { shorts } from "@/constants/shorts";

const ShortsSection = () => {
  return (
    <View style={tw`gap-y-2.5`}>
      <View style={tw`flex-row gap-x-3 items-center ml-1`}>
        <Image
          source={require("../assets/images/yt-shorts-red.png")}
          style={{ width: 35, height: 35 }}
        />
        <Text style={tw`font-semibold text-base`}>Shorts</Text>
      </View>

      <View style={tw`flex-row justify-between items-center flex-wrap gap-y-3`}>
        {shorts.map((short) => {
          return (
            <View key={short.title} style={tw`w-[49%] h-[260px] rounded-lg`}>
              <Image
                source={{ uri: short.image }}
                style={tw`w-full h-full rounded-lg`}
              />

              <Text
                style={tw`text-white absolute bottom-2 left-2 font-medium w-[90%]`}
              >
                {short.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ShortsSection;
