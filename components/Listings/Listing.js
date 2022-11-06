import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";



const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


const Listing = (props) => {
    const [listing, setListing] = useState();

    const fetchData = async () => {
        const resp = await fetch(`${baseUrl}listing/211`);
        const data = await resp.json();
        // console.log(data);
        setListing(data);
        // setLoading(false);
        // console.log(data);
        // console.log(listing);
      };
    
      useEffect(() => {
        fetchData();
        // console.log(listing.id);
      }, []);



  return (
    <ScrollView style={styles.scrollView}>
    <View>
         <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>{ listing ? listing.title.rendered : null}</Title>
      <Paragraph>{ listing ? listing.content.rendered : null}</Paragraph>
    </Card.Content>
  </Card>

   </View>
   </ScrollView>
  )
}

export default Listing



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