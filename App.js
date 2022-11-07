import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack"; //Insert screens into a stack
import { NavigationContainer } from "@react-navigation/native"; //contains navigator and screen
const Stack = createStackNavigator(); // createStackNavigator is used to create a stack like structure.
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/Oath/Login";
import Register from "./screens/Oath/Register";
import Listing from "./components/Listings/Listing";
import Listings from "./components/Listings/Listings";
import Test from "./components/Test";
import ImagedCarouselCard from "./components/Cards/Carousel/ImagedCarouselCard";
import House from "./components/House";
import Front from "./screens/Front";
import Detail from "./Detail";
import information from "./Test/pages/information/index";
// import contats from "./Test/pages/contats/index";
// import contats from "./components/Users/index/";
import Users from "./components/Users/Users/";
import User from "./components/Users/User/";
import Locations from "./components/Locations/Locations";




const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
          name="Testing"
          component={Users}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Home"
          component={Front}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
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
