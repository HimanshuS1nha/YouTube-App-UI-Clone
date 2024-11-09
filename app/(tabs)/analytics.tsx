import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const Analytics = () => {
  const stats = [
    {
      Icon: AntDesign,
      iconName: "eyeo",
      value: "10.2M",
      title: "Views",
    },
    {
      Icon: AntDesign,
      iconName: "like2",
      value: "500M",
      title: "Likes",
    },
    {
      Icon: MaterialCommunityIcons,
      iconName: "comment-text-outline",
      value: "200K",
      title: "Comments",
    },
    {
      Icon: MaterialCommunityIcons,
      iconName: "share-outline",
      value: "10K",
      title: "Shares",
    },
  ];
  return (
    <ScrollView contentContainerStyle={tw`flex-1 bg-white px-4 pt-2 gap-y-5`}>
      <View>
        <Text style={tw`text-3xl font-bold`}>Analytics</Text>
        <Text style={tw`text-gray-700`}>All time</Text>
      </View>

      <View style={tw`gap-y-3`}>
        <View style={tw`flex-row gap-x-3 items-center`}>
          <Image
            source={require("../../assets/images/channel-logo.png")}
            style={tw`w-12 h-12 rounded-full`}
          />
          <View>
            <Text style={tw`text-lg font-bold`}>27</Text>
            <Text style={tw`text-gray-700`}>Subscribers</Text>
          </View>
        </View>

        <View style={tw`flex-row`}>
          {stats.map((stat, i) => {
            return (
              <View
                key={stat.title}
                style={tw`gap-y-2 ${i === 0 ? "" : "pl-5"} ${
                  i === stats.length - 1
                    ? ""
                    : "pr-5 border-r border-r-gray-300"
                }`}
              >
                <stat.Icon
                  name={stat.iconName as never}
                  size={25}
                  color={"black"}
                  style={tw`ml-1`}
                />
                <View style={tw`items-start`}>
                  <Text style={tw`font-semibold text-base`}>{stat.value}</Text>
                  <Text>{stat.title}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;
