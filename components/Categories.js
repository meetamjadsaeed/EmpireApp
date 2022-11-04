import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

function Categories(props) {
    const [Categories, setCategories] = useState();
    const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


    const fetchListings = async () => {
      
      const resp = await fetch(`${baseUrl}categories`);
      const data = await resp.json();
      setCategories(data);
      // setLoading(false);
    //   console.log(data);
    //   console.log(Categories);
    };
  
    useEffect(() => {
      fetchListings();
    }, []);
  

    return (
        <SafeAreaView style={styles.container}>
        <View>
          {Categories
            ? Categories.map((item) => {
                return (
                  <Card>
                    <Card.Title
                      title="Card Title"
                      subtitle="Card Subtitle"
                      left={LeftContent}
                    />
                    <Card.Content>
                      <Title>{item.name}</Title>
                      <Paragraph>dsjdsjdkhsj</Paragraph>
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
    </SafeAreaView>
  );
}
export default Categories;

const styles = StyleSheet.create({
    container: {
      marginTop: 100,
    },
    scrollView: {
      backgroundColor: "pink",
      marginHorizontal: 20,
    },
  });
  