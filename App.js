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


// // Oath
// import LoginScreen from "./screens/Oath/Login";
// import Register from "./screens/Oath/Register";

// // Main Pages
// import Front from "./screens/Front";

// // Listings
// import Listings from "./components/Listings/Listings";
// import Listing from "./components/Listings/Listing";

// // Taxonomies
// // Categories
// import Categories from "./components/Categories/Categories";
// import Category from "./components/Categories/Category";
// import ListingsWithCat from "./components/Categories/ListingsWithCat";

// // Locations
// import Locations from "./components/Locations/Locations";
// import Location from "./components/Locations/Location";
// import ListingsWithLoc from "./components/Locations/ListingsWithLoc";

// // Tags
// import Tags from "./components/Tags/Tags";
// import Tag from "./components/Tags/Tag";
// import TagsWithListing from "./components/Tags/TagsWithListing";

// // User
// import Users from "./components/Users/Users/";
// import User from "./components/Users/User/";

// // Blog Posts
// import Posts from "./components/Posts/Posts";
// import Post from "./components/Posts/Post";
// import Comments from "./components/Posts/Comments";

// import Test from "./components/Test";
// import ImagedCarouselCard from "./components/Cards/Carousel/ImagedCarouselCard";
// import House from "./components/House";
// import Detail from "./Detail";
// import information from "./Test/pages/information/index";
// import contats from "./Test/pages/contats/index";
// import contats from "./components/Users/index/";

import StackNavigator from "./components/StackNavigator";
import TabNavigation from "./components/Reuse/TabNavigation";


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>

      {/* <TabNavigation/> */}
      <StackNavigator/>
    
    </>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
