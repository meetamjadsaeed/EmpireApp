import React from "react";
import { View, Text } from "react-native";
// import { View } from "react-native";
// import { Text, View } from "react-native";
// import { Button } from "native-base";
// import { StyleSheet, SafeAreaView } from 'react-native';
import Listings from "../components/Listings/Listings";
import Nav from "../components/Nav";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
// import LoginScreen from "./Oath/Login";
import LoginScreen from "./Oath/Login";

function Home(props) {
  const onLoginPress = () => {
    props.navigation.navigate("LoginScreen");
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View>
          <Nav />
          <Title>Listings</Title>
          <Listings />
        </View>
      </ScrollView>
    </>
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
