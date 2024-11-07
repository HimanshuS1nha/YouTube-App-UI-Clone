import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { shorts } from "@/constants/shorts";

const MyChannel = () => {
  const [selectedOption, setSelectedOption] = useState<
    "home" | "videos" | "shorts" | "community"
  >("home");
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
        <Pressable
          style={tw`pb-3 ${selectedOption === "home" ? "border-b-2" : ""}`}
          onPress={() => setSelectedOption("home")}
        >
          <Text
            style={tw`${
              selectedOption === "home" ? "font-semibold" : ""
            } text-base`}
          >
            Home
          </Text>
        </Pressable>
        <Pressable
          style={tw`pb-3 ${selectedOption === "videos" ? "border-b-2" : ""}`}
          onPress={() => setSelectedOption("videos")}
        >
          <Text
            style={tw`${
              selectedOption === "videos" ? "font-semibold" : ""
            } text-base`}
          >
            Videos
          </Text>
        </Pressable>
        <Pressable
          style={tw`pb-3 ${selectedOption === "shorts" ? "border-b-2" : ""}`}
          onPress={() => setSelectedOption("shorts")}
        >
          <Text
            style={tw`${
              selectedOption === "shorts" ? "font-semibold" : ""
            } text-base`}
          >
            Shorts
          </Text>
        </Pressable>
        <Pressable
          style={tw`pb-3 ${selectedOption === "community" ? "border-b-2" : ""}`}
          onPress={() => setSelectedOption("community")}
        >
          <Text
            style={tw`${
              selectedOption === "community" ? "font-semibold" : ""
            } text-base`}
          >
            Community
          </Text>
        </Pressable>
      </View>

      <View style={tw`mt-3.5`}>
        {selectedOption === "home" && (
          <View style={tw`gap-y-5`}>
            <View style={tw`gap-y-3`}>
              <Text style={tw`font-semibold text-base px-3`}>Shorts</Text>
              <View style={tw`flex-row flex-wrap`}>
                {shorts.map((short) => {
                  return (
                    <View key={short.title} style={tw`w-[33%] h-[200px]`}>
                      <Image
                        source={{ uri: short.image }}
                        style={tw`w-full h-full`}
                      />

                      <Text
                        style={tw`absolute bottom-1.5 left-1 text-white text-xs`}
                      >
                        {short.views} views
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>

            <View style={tw`gap-y-3`}>
              <Text style={tw`font-semibold text-base px-3`}>Videos</Text>
              <View style={tw`flex-row flex-wrap`}>
                {shorts.map((short) => {
                  return (
                    <View key={short.title} style={tw`w-[33%] h-[200px]`}>
                      <Image
                        source={{ uri: short.image }}
                        style={tw`w-full h-full`}
                      />

                      <Text
                        style={tw`absolute bottom-1.5 left-1 text-white text-xs`}
                      >
                        {short.views} views
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        )}

        {selectedOption === "shorts" && (
          <View style={tw`gap-y-3`}>
            <View style={tw`px-3 flex-row items-center gap-x-3`}>
              <View style={tw`bg-black py-1.5 px-3.5 rounded-lg`}>
                <Text style={tw`font-semibold text-white`}>Latest</Text>
              </View>
              <View style={tw`bg-[#f2f2f2] py-1.5 px-3.5 rounded-lg`}>
                <Text style={tw`font-semibold`}>Popular</Text>
              </View>
              <View style={tw`bg-[#f2f2f2] py-1.5 px-3.5 rounded-lg`}>
                <Text style={tw`font-semibold`}>Oldest</Text>
              </View>
            </View>
            <View style={tw`flex-row flex-wrap`}>
              {shorts.map((short) => {
                return (
                  <View key={short.title} style={tw`w-[33%] h-[200px]`}>
                    <Image
                      source={{ uri: short.image }}
                      style={tw`w-full h-full`}
                    />

                    <Text
                      style={tw`absolute bottom-1.5 left-1 text-white text-xs`}
                    >
                      {short.views} views
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MyChannel;
