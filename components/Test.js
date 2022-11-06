import React from 'react';
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";


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