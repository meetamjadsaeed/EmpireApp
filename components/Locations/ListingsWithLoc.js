import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


  

const ListingsWithLocation = ({Id}) => {
    const [GetData, setData] = useState();

    const DataByAPI = async () => {
      const resp = await fetch(`${baseUrl}listing?location=${Id}`);
      const data = await resp.json();
      setData(data);
      // setLoading(false);
      // console.log(data);
    };
  
    useEffect(() => {
      DataByAPI();
    }, []);


  return (
    <ScrollView style={styles.scrollView}>

    <View style={styles.container}>
    {GetData
      ? GetData.map((item) => {
          return (
            <Card>
              <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
                left={LeftContent}
              />
              <Card.Content>
                <Title>{item.slug}</Title>
                <Paragraph>{item.content.rendered}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>
          );
        })
      : null}
  </View>
  </ScrollView>


  )
}

export default ListingsWithLocation;

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
  