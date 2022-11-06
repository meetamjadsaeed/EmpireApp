import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


  

export const CPTByTaxonomy = () => {
    const [GetCPTByTaxonomy, SetCPTByTaxonomy] = useState();

    const DataByAPI = async () => {
      const resp = await fetch(`${baseUrl}listing?listing-category= 180`);
      const data = await resp.json();
      SetCPTByTaxonomy(data);
      // setLoading(false);
      // console.log(data);
    };
  
    useEffect(() => {
      DataByAPI();
    }, []);


  return (
    <ScrollView style={styles.scrollView}>

    <View style={styles.container}>
    {GetCPTByTaxonomy
      ? GetCPTByTaxonomy.map((item) => {
          return (
            <Card>
              <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
                left={LeftContent}
              />
              <Card.Content>
                <Title>{item.title.rendered}</Title>
                <Paragraph>{item.content.rendered.slice(0, 250)}</Paragraph>
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
  