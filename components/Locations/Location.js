import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


const Location = (props) => {
    const [getData, setData] = useState();

    const fetchData = async () => {
        const resp = await fetch(`${baseUrl}location/155`);
        const data = await resp.json();
        // console.log(data);
        setData(data);
        // setLoading(false);
        // console.log(data);
        // console.log(getData);
      };
    
      useEffect(() => {
        fetchData();
        // console.log(getData.id);
      }, []);



  return (
    <ScrollView style={styles.scrollView}>
    <View>
         <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>{ getData ? getData.title.rendered : null}</Title>
      <Paragraph>{ getData ? getData.content.rendered : null}</Paragraph>
    </Card.Content>
  </Card>

   </View>
   </ScrollView>
  )
}

export default Location



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