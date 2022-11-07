import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from "react-native-swiper";

// const img = "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80";

const img = require('./houseimage.jpeg'); 

export default function SwiperComponent(){
    return(
        <Swiper
        style={styles.wrapper}
        dotStyle={{
            backgroundColor:'#000',
            borderColor:'#000',
            borderWidth:1,
            width:10,
            height:10,
            borderRadius:10,
        }}
        activeDotColor="#fff"
        activeDotStyle={{
            borderColor:'#000',
            borderWidth:1,
            width:10,
            height:10,
            borderRadius:10,
        }}
        >
        
        
        <View style={styles.slide}>
                <Image 
                source={img}
                style={{width:'100%', height:400}}
                />
            </View>

            <View style={styles.slide}>
                <Image 
                source={img}
                style={{width:'100%', height:400}}
                />
            </View>

            <View style={styles.slide}>
                <Image 
              source={img}
                style={{width:'100%', height:400}}
                />
            </View>

        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        
    },

    slide:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
    },
});