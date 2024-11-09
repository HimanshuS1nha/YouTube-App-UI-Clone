import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const Analytics = () => {
  return (
    <ScrollView contentContainerStyle={tw`bg-white px-4 pt-2 gap-y-5`}>
      <View>
        <Text style={tw`text-3xl font-bold`}>Analytics</Text>
        <Text style={tw`text-gray-700`}>All time</Text>
      </View>

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
    </ScrollView>
  );
};

export default Analytics;
