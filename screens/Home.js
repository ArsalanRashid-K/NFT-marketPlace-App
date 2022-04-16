import React from "react";
import { useState } from "react";
import { View, FlatList, SafeAreaView, Text } from "react-native";
import { COLORS, FONTS, NFTData, SIZES } from "../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import Position from "react-native/Libraries/Components/Touchable/Position";

export const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
     
      </View>
    </SafeAreaView>
  );
};
