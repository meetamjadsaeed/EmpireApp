import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";

import New from "../components/New";
import House from "../components/House";
import Recommend from "../components/Recommended";
import Nav from "../components/Reuse/Nav";
import LocationsComponent from "../components/Locations/Locations";
import Categories from "../components/Categories/Categories";
import Loader from "../components/Loader";
import ListingsWithLocation from "../components/Locations/ListingsWithLoc";
import NewListing from "../components/Listings/NewListing";
import Users from "../components/Users/Users";
import UserComponent from "../components/Users/UserComponent";

const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";

function Front({ navigation }) {
  const [listings, setListings] = useState();
  const [Locations, setLocations] = useState();
  const [getCategories, setCategories] = useState();
  const [getUsers, setUsers] = useState();

  const DataByAPI = async () => {
    // FOR Listings
    const listingsResponse = await fetch(`${baseUrl}listing`);
    const listingsData = await listingsResponse.json();
    setListings(listingsData);

    // FOR Locations
    const locationsResponse = await fetch(`${baseUrl}location`);
    const locationsData = await locationsResponse.json();
    setLocations(locationsData);

    // FOR Categories
    const categoriesResponse = await fetch(`${baseUrl}categories`);
    const categoriesData = await categoriesResponse.json();
    setCategories(categoriesData);

    // For Users
    const usersResponse = await fetch(`${baseUrl}users`);
    const usersData = await usersResponse.json();
    setUsers(usersData);
  };

  useEffect(() => {
    DataByAPI();
  }, []);

  // const navigation = useNavigation();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#fff" }}
    >
      <Button
        icon="plus"
        mode="contained"
        buttonColor="#fff"
        textColor="#3897f1"
        onPress={() => {
          navigation.navigate("NewListing");
        }}
      >
        Create New
      </Button>

      {/* Menu */}
      <Nav />

      <View style={styles.contentNew}>
        <Text style={styles.title}>Sellers</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {getUsers ? (
          getUsers.map((item) => {
            return (
              <>
                <UserComponent name={item.name} Id={item.id} />
                <UserComponent name={item.name} Id={item.id} />
                <UserComponent name={item.name} Id={item.id} />
                <UserComponent name={item.name} Id={item.id} />
                <UserComponent name={item.name} Id={item.id} />
              </>
            );
          })
        ) : (
          <Loader />
        )}
      </ScrollView>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Categories</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {getCategories ? (
          getCategories.map((item) => {
            return <Categories name={item.name} id={item.id} />;
          })
        ) : (
          <Loader />
        )}
      </ScrollView>

      <View style={styles.contentNew}>
        <Text style={styles.title}>Latest</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {listings ? (
          listings.map((item) => {
            return (
              <New
                cover={require("../assets/images/house1.jpg")}
                name={item.title.rendered}
                Id={item.id}
                description={item.content.rendered.slice(0, 100)}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </ScrollView>

      <View
        style={{ flexDirection: "row", marginBottom: 10, alignItems: "center" }}
      >
        <Text style={[styles.title, { marginTop: 20 }]}>All</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {listings ? (
          listings.map((item) => {
            return (
              <House
                cover={require("../assets/images/house4.jpg")}
                name={item.title.rendered}
                price="Rs. 50,000"
                Id={item.id}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>Recommended</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {listings ? (
          listings.map((item) => {
            return (
              <Recommend
                cover={require("../assets/images/house1.jpg")}
                name={item.title.rendered}
                offer="25%"
                Id={item.id}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </ScrollView>

      <Text style={[styles.title, { marginTop: 20 }]}>Browse By Locations</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        {Locations ? (
          Locations.map((item) => {
            return (
              <LocationsComponent
                cover={require("../assets/images/city.jpeg")}
                name={item.name}
                Id={item.id}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </ScrollView>
    </ScrollView>
  );
}

export default Front;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },

  inputArea: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    width: "98%",
    backgroundColor: "#fff",
    elevation: 2,
    height: 37,
    borderRadius: 10,
  },

  input: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 10,
    fontSize: 13,
    width: "90%",
  },

  contentNew: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  title: {
    paddingHorizontal: 15,
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },
});
