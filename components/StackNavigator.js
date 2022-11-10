import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack"; //Insert screens into a stack
import { NavigationContainer } from "@react-navigation/native"; //contains navigator and screen
const Stack = createStackNavigator(); // createStackNavigator is used to create a stack like structure.
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from '../screens/Oath/Login';
import Register from '../screens/Oath/Register';
import Front from '../screens/Front';


// Listings 
import Listings from "./Listings/Listings";
import Listing from "./Listings/Listing";
import NewListing from './Listings/NewListing';

// Taxonomies 
    // Categories 
import Categories from "./Categories/Categories";
import Category from "./Categories/Category";
import ListingsWithCat from "./Categories/ListingsWithCat";

    // Locations
import Locations from "./Locations/Locations";
import Location from "./Locations/Location";
import ListingsWithLoc from "./Locations/ListingsWithLoc";

    // Tags
import Tags from "./Tags/Tags";
import Tag from "./Tags/Tag";
import TagsWithListing from "./Tags/TagsWithListing";

// User 
import Users from "./Users/Users/";
import User from "./Users/User/";

// Blog Posts
import Posts from "./Posts/Posts";
import Post from "./Posts/Post";
import Comments from "./Posts/Comments";


import ImagedCarouselCard from "./Cards/Carousel/ImagedCarouselCard";




function stackNavigator(props) {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
        {/* <Stack.Screen name="test" component={ImagedCarouselCard} /> */}
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Front" component={Front} />
          <Stack.Screen name="Listings" component={Listings} />
          <Stack.Screen name="Listing" component={Listing} />
          <Stack.Screen name="NewListing" component={NewListing} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="ListingsWithCat" component={ListingsWithCat} />
          <Stack.Screen name="Locations" component={Locations} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="ListingsWithLoc" component={ListingsWithLoc} />
          <Stack.Screen name="Tags" component={Tags} />
          <Stack.Screen name="Tag" component={Tag} />
          <Stack.Screen name="TagsWithListing" component={TagsWithListing} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen name="User" component={User} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default stackNavigator;