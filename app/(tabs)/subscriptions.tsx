import { View, Text, ScrollView } from "react-native";
import React, { useMemo } from "react";
import tw from "twrnc";

const Subscriptions = () => {
  const subscribedChannels = useMemo(
    () => [
      {
        name: "Random",
        color: "green",
      },
      {
        name: "Someone",
        color: "pink",
      },
      {
        name: "Unknown",
        color: "blue",
      },
    ],
    []
  );

  const menuOptions = useMemo(
    () => ["Today", "Videos", "Shorts", "Live", "Posts"],
    []
  );
  return (
    <ScrollView contentContainerStyle={tw`bg-white py-2`}>
      <View style={tw`flex-row justify-between px-2.5 items-center`}>
        <View style={tw`flex-row gap-x-4 items-center`}>
          {subscribedChannels.map((channel) => {
            return (
              <View key={channel.name} style={tw`items-center gap-y-1`}>
                <View
                  style={tw`w-12 h-12 bg-${channel.color}-500 items-center justify-center rounded-full`}
                >
                  <Text style={tw`text-white text-xl font-medium`}>
                    {channel.name[0]}
                  </Text>
                </View>
                <Text style={tw`text-xs font-medium`}>
                  {channel.name.length > 10
                    ? channel.name.substring(0, 10) + "..."
                    : channel.name}
                </Text>
              </View>
            );
          })}
        </View>
        <Text style={tw`text-blue-600 font-bold`}>All</Text>
      </View>

      <View style={tw`mt-4 px-2.5`}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`gap-x-3`}
        >
          <View style={tw`bg-black py-1.5 px-3.5 rounded-lg`}>
            <Text style={tw`font-semibold text-white`}>All</Text>
          </View>

          {menuOptions.map((menuOption) => {
            return (
              <View
                style={tw`bg-[#f2f2f2] py-1.5 px-3.5 rounded-lg`}
                key={menuOption}
              >
                <Text style={tw`font-semibold`}>{menuOption}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={tw``}></View>
    </ScrollView>
  );
};

export default Subscriptions;
