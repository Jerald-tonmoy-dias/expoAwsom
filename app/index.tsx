import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack capitalize">hello jerald</Text>
      <StatusBar style="auto" />
      <Link href={`/home`} className="text-blue-400">
        Go to home
      </Link>
    </View>
  );
};

export default App;
