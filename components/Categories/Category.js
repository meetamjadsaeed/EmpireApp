import { View, Text, ImageEditor } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import * as React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import ImagedCarouselCard from "../Cards/Carousel/ImagedCarouselCard";





const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


const Category = ({ route, navigation }) => {
    const [Category, SETCategory] = useState();
    const { catId } = route.params;

    const fetchData = async () => {
        const resp = await fetch(`${baseUrl}Category/${catId}`);
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

    <ImagedCarouselCard catName = { Category ? Category.slug : "Not Found"}/>

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