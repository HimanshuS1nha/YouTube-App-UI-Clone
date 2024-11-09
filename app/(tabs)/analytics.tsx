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
    <ScrollView contentContainerStyle={tw`flex-1 bg-white px-4 pt-2 gap-y-6`}>
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

      <View style={tw`gap-y-3`}>
        <Text style={tw`font-bold text-base`}>Recent views</Text>

        <View style={tw`flex-row justify-between`}>
          <View>
            <Text style={tw`font-semibold`}>2M</Text>
            <Text>Last 7 days</Text>
          </View>

          <View style={tw`justify-end`}>
            <View style={tw`flex-row gap-x-0.5 items-end`}>
              <View style={tw`w-4 h-1 bg-[#aaaaaa]`} />
              <View style={tw`w-4 h-1 bg-[#aaaaaa]`} />
              <View style={tw`w-4 h-3 bg-[#5190e0] rounded-t-[4px]`} />
              <View style={tw`w-4 h-5 bg-[#5190e0] rounded-t-[4px]`} />
              <View style={tw`w-4 h-7 bg-[#5190e0] rounded-t-[4px]`} />
              <View style={tw`w-4 h-5 bg-[#5190e0] rounded-t-[4px]`} />
              <View style={tw`w-4 h-7.5 bg-[#075ed6] rounded-t-[4px]`} />
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700 text-xs`}>Nov 3</Text>
              <Text style={tw`text-gray-700 text-xs`}>Nov 9</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={tw`gap-y-3`}>
        <Text style={tw`font-bold text-base`}>Latest creation</Text>

        <View
          style={tw`px-2 border-[0.8px] border-gray-300 rounded-lg p-2 flex-row items-center gap-x-3.5`}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/15940012/pexels-photo-15940012/free-photo-of-close-up-of-a-smartphone-displaying-a-conversation-with-chatgpt.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={tw`w-36 h-[200px] rounded-lg`}
          />

          <View style={tw`gap-y-4`}>
            <View style={tw`gap-y-1`}>
              <Text style={tw`text-base font-semibold`}>
                AI App in React Native
              </Text>
              <Text style={tw`text-gray-700`}>12 days ago</Text>
            </View>

            <View style={tw`gap-y-2`}>
              <View style={tw`flex-row gap-x-2`}>
                <AntDesign name="eyeo" size={18} color={"black"} />
                <Text style={tw`font-bold`}>6.4M</Text>
              </View>
              <View style={tw`flex-row gap-x-2`}>
                <AntDesign name="like2" size={18} color={"black"} />
                <Text style={tw`font-bold`}>2M</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;
