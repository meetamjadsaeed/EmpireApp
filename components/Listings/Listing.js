import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Stars from "react-native-stars";
import SwiperComponent from "./Swiper";
import { useState, useEffect } from "react";

const img = require('./houseimage.jpeg'); 
// const img ="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80";
const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";

function Detail() {
  const [getListing, setListing] = useState();
  const [getRelated, setRelated] = useState();
  const [getCategories, setCategories] = useState();
  const [getTags, setTags] = useState();
  const [getReveiws, setReveiws] = useState();

  const DataByAPI = async () => {
    // FOR Listings
    const listingResponse = await fetch(`${baseUrl}listing/211`);
    const listingData = await listingResponse.json();
    setListing(listingData);

    // Related Listings
    const RelatedResponse = await fetch(
      `${baseUrl}listing?listing-category= 180`
    );
    const RelatedData = await RelatedResponse.json();
    setRelated(RelatedData);

    // FOR Listings Categories
    const categoriesResponse = await fetch(
      `${baseUrl}listing-category?post=211`
    );
    const categoriesData = await categoriesResponse.json();
    setCategories(categoriesData);

    // FOR Listings Tags
    const tagsResponse = await fetch(`${baseUrl}list-tags?post=1`);
    const tagsData = await tagsResponse.json();
    setTags(tagsData);

    // FOR Listing Reveiws
    const reveiwsResponse = await fetch(`${baseUrl}comments?post=1`);
    const reveiwsData = await reveiwsResponse.json();
    setReveiws(reveiwsData);
  };

  useEffect(() => {
    DataByAPI();
  }, []);

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent />
      </View>

      <View style={styles.headerContent}>
        <View style={{ width: "65%" }}>
          <Text style={styles.house}>
            {getListing ? getListing.title.rendered : null}
          </Text>
        </View>

        <View style={{ width: "35%" }}>
          <Text style={styles.rating}>Avaliações</Text>
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <Stars
              defoult={4}
              count={5}
              half={true}
              starSize={20}
              fullStar={
                <Ionicons name="md-star" size={24} style={styles.myStarStyle} />
              }
              emptyStar={
                <Ionicons
                  name="md-star-outline"
                  size={24}
                  style={styles.myStarStyle}
                />
              }
              halfStar={
                <Ionicons
                  name="md-star-half"
                  size={24}
                  style={styles.myStarStyle}
                />
              }
            />
          </View>
        </View>
      </View>

      <Text style={styles.price}>R$ 1.200,00</Text>

      <Text style={styles.description}>
        {getListing ? getListing.content.rendered : null}
      </Text>

      {/* Related listings */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 35 }}
      >
        <View style={styles.slide}>
          {getRelated
            ? getRelated.map((item) => {
                return (
                  <Image
                  source={img}
                  style={{width:90, height:90, borderRadius:8}}
                  />

                  // <Text style={styles.house}>{item.content.rendered}</Text>
                );
              })
            : null}
        </View>
      </ScrollView>

      {/* Categgoires for this listings */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 35 }}
      >
        <View style={styles.slide}>
          {getCategories
            ? getCategories.map((item) => {
                return (
                  // <Image
                  // source={img}
                  // style={{width:90, height:90, borderRadius:8}}
                  // />

                  <Text style={styles.house}>{item.name}</Text>
                );
              })
            : null}
        </View>
      </ScrollView>

      {/* Categgoires for this listings */}

      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 35 }}
      >
        <View style={styles.slide}>
          {getTags
            ? getTags.map((item) => {
                return (
                  // <Image
                  // source={img}
                  // style={{width:90, height:90, borderRadius:8}}
                  // />

                  <Text style={styles.house}>Tags</Text>
                );
              })
            : null}
        </View>
      </ScrollView> */}

      {/* Reveiws for this listing */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: 15, marginTop: 35 }}
      >
        <View style={styles.slide}>
          {getReveiws
            ? getReveiws.map((item) => {
                return (
                  // <Image
                  // source={img}
                  // style={{width:90, height:90, borderRadius:8}}
                  // />

                  <Text style={styles.house}>Tags</Text>
                );
              })
            : null}
        </View>
      </ScrollView>
    </View>
    </ScrollView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  swiperContent: {
    flexDirection: "row",
    height: 340,
    width: "100%",
  },

  headerContent: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },

  house: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#4f4a4a",
  },

  rating: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 9,
    color: "#4f4a4a",
  },

  myStarStyle: {
    color: "#E7A74e",
    backgroundColor: "transparent",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  price: {
    paddingHorizontal: 20,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
    color: "#000",
  },

  description: {
    fontFamily: "Montserrat_500Medium",
    paddingHorizontal: 20,
    color: "#b3aeae",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 20,
  },

  slide: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 90,
    borderRadius: 8,
    marginRight: 20,
  },
});

// import { View, Text, ImageEditor } from "react-native";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import * as React from 'react';
// import { Appbar } from "react-native-paper";
// import { StyleSheet, StatusBar, ScrollView } from "react-native";
// import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

// const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";

// const Listing = (props) => {
//     const [listing, setListing] = useState();

//     const fetchData = async () => {
//         const resp = await fetch(`${baseUrl}listing/211`);
//         const data = await resp.json();
//         // console.log(data);
//         setListing(data);
//         // setLoading(false);
//         // console.log(data);
//         // console.log(listing);
//       };

//       useEffect(() => {
//         fetchData();
//         // console.log(listing.id);
//       }, []);

//   return (
//     <ScrollView style={styles.scrollView}>
//     <View>
//          <Card>
//     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
//     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//     <Card.Content>
//       <Title>{ listing ? listing.title.rendered : null}</Title>
//       <Paragraph>{ listing ? listing.content.rendered : null}</Paragraph>
//     </Card.Content>
//   </Card>

//    </View>
//    </ScrollView>
//   )
// }

// export default Listing

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       },
//     scrollView: {
//       marginHorizontal: 20,
//     },
//   });
