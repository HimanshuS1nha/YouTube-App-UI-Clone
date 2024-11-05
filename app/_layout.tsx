import { Stack } from "expo-router";
import { View } from "react-native";
import tw from "twrnc";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(others)/my-channel"
        options={{
          title: "Coding Change",
          headerShadowVisible: false,
          headerRight: () => {
            return (
              <View style={tw`mr-2 flex-row items-center gap-x-7`}>
                <FontAwesome5 name="chromecast" size={24} color="black" />
                <AntDesign name="search1" size={24} color="black" />
                <Ionicons
                  name="ellipsis-vertical-sharp"
                  size={24}
                  color="black"
                />
              </View>
            );
          },
        }}
      />
    </Stack>
  );
}
