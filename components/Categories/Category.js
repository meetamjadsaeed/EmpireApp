import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


const Category = (props) => {
    const [Category, SETCategory] = useState();

    const fetchData = async () => {
        const resp = await fetch(`${baseUrl}Category/2`);
        const data = await resp.json();
        // console.log(data);
        SETCategory(data);
        // setLoading(false);
        // console.log(data);
        // console.log(Category);
      };
    
      useEffect(() => {
        fetchData();
        // console.log(Category.id);
      }, []);



  return (
    <ScrollView style={styles.scrollView}>
    <View>
         <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>{ Category ? Category.title.rendered : null}</Title>
      <Paragraph>{ Category ? Category.content.rendered : null}</Paragraph>
    </Card.Content>
  </Card>

   </View>
   </ScrollView>
  )
}

export default Category



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