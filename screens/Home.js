import React from "react";
import { View, Text } from "react-native";
// import { View } from "react-native";
// import { Text, View } from "react-native";
// import { Button } from "native-base";
// import { StyleSheet, SafeAreaView } from 'react-native';
import Listings from "../components/Listings";
import AllCities from "../components/AllCities";
import ListingsByCity from "../components/ListingsByCity";
import Categories from "../components/Categories";
import Nav from "../components/Nav";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

function Home(props) {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        <Nav />
        <Title>Listings</Title>
        <Listings />

        <Title>Categories</Title>
        <Categories />

        <Title>All Cities</Title>
        <AllCities />

        <Title>Listings By City</Title>
        <ListingsByCity />
      </View>
    </ScrollView>

    //       <View>
    // <Listings/>
    //       </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: '500',
//   }
// });

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});
