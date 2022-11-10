import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack"; //Insert screens into a stack
import { NavigationContainer } from "@react-navigation/native"; //contains navigator and screen
const Tab = createBottomTabNavigator(); // createStackNavigator is used to create a stack like structure.
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Users from '../Users/Users';
import stackNavigator from '../StackNavigator';


function Navigation(props) {
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
          component={Users}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={Users}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Users}
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

export default Navigation;