import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';



function House({ cover }){
    return(
        <View style={styles.container}>
            <View>
                <Image 
                source={cover}
                style={styles.cover}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>
                    Casa para morar!
                </Text>
                <Text style={styles.price}>
                    R$ 954,60
                </Text>
            </View>

        </View>
    );
}

export default House;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:260,
        height:70,
        backgroundColor:'#fff',
        elevation:2,
        padding:6,
        marginVertical:5,
        marginRight:20,
        marginLeft:2,
        borderRadius:10,
    },

    cover:{
        borderRadius:10,
        width:60,
        height:60,
    },

    content:{
        width:'65%',
        justifyContent:'flex-end',
        paddingHorizontal:10,
        height:'100%',
    },
    
    description:{
        fontSize:9,
        fontFamily:'Montserrat_500Medium',
    }, 

    price:{
        fontSize:12,
        fontFamily:'Montserrat_700Bold',
    },

})




















// import { View, Text, ImageEditor } from "react-native";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import * as React from 'react';
// import { Appbar } from "react-native-paper";
// import { StyleSheet, StatusBar, ScrollView } from "react-native";
// import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";



// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
// const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";

// function Listings(props) {
//   const [listings, setListings] = useState();

//   const DataByAPI = async () => {
//     const resp = await fetch(`${baseUrl}listing`);
//     const data = await resp.json();
//     setListings(data);
//     // setLoading(false);
//     // console.log(data);
//   };

//   useEffect(() => {
//     DataByAPI();
//   }, []);

//   return (
//     // <View>
//     //   <Text>Listings</Text>
//     // </View>

//         <View style={styles.container}>
//           {listings
//             ? listings.map((item) => {
//                 return (
//                   <Card>
//                     <Card.Title
//                       title="Card Title"
//                       subtitle="Card Subtitle"
//                       left={LeftContent}
//                     />
//                     <Card.Content>
//                       <Title>{item.title.rendered}</Title>
//                       <Paragraph>{item.content.rendered.slice(0, 250)}</Paragraph>
//                     </Card.Content>
//                     <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
//                     <Card.Actions>
//                       <Button>Cancel</Button>
//                       <Button>Ok</Button>
//                     </Card.Actions>
//                   </Card>
//                 );
//               })
//             : null}
//         </View>

//   );
// }

// export default Listings;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   scrollView: {
//     marginHorizontal: 20,
//   },
// });
