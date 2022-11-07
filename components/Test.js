import React from 'react';
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Avatar, AirbnbRating } from "react-native-elements"


function Test(props) {
    return (
      
        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

            <Text>
                Testing components
            </Text>

        </View>
        </ScrollView>

    );
}

export default Test;

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