import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  return (
    <View style={tw`bg-white py-4`}>
      <View style={tw`px-3 flex-row gap-x-3 items-center`}>
        <Image
          source={require("../../assets/images/channel-logo.png")}
          style={tw`rounded-full w-20 h-20`}
        />

        <View style={tw`gap-y-0.5`}>
          <Text style={tw`font-bold text-2xl`}>Coding Change</Text>
          <View style={tw`flex-row items-center gap-x-1.5 items-center`}>
            <Text>@CodingChange</Text>
            <Text>•</Text>
            <View style={tw`flex-row gap-x-1 items-center`}>
              <Text style={tw`text-gray-700`}>View channel</Text>
              <AntDesign name="right" size={15} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
