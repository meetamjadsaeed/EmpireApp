import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";



const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";

function Listings(props) {
  const [listings, setListings] = useState();

  const DataByAPI = async () => {
    const resp = await fetch(`${baseUrl}listing`);
    const data = await resp.json();
    setListings(data);
    // setLoading(false);
    // console.log(data);
  };

  useEffect(() => {
    DataByAPI();
  }, []);

  return (
    // <View>
    //   <Text>Listings</Text>
    // </View>

        <View style={styles.container}>
          {listings
            ? listings.map((item) => {
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

  );
}

export default Listings;

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
