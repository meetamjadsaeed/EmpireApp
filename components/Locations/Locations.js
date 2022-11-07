import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

function Locations({ cover, name }){
    return(
        <ImageBackground 
        source={cover}
        style={styles.container}
        blurRadius={2}
        >
            <Text style={[styles.house, styles.shadow]}>
                {name}
            </Text>
        </ImageBackground>
    );
}

export default Locations;

const styles = StyleSheet.create({
    container:{
        height:130,
        width:230,
        marginRight:20,
        borderRadius:10,
        marginBottom:40,
        opacity:0.8,
        backgroundColor:'#000',
        marginLeft:3,
        padding:12,
        marginTop:20,
    },

    house:{
        fontFamily:'Montserrat_700Bold',
        color:'#fff',
        fontSize:15,
    },

    description:{
        fontSize:12,
        fontFamily:'Montserrat_700Bold',
        color:'#fff',
    },

    shadow:{
        textShadowRadius:3,
        textShadowOffset:{ width:1, height:2 },
        textDecorationColor:'#000',
    }
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

// function Locations(props) {
//   const [getData, setData] = useState();

//   const DataByAPI = async () => {
//     const resp = await fetch(`${baseUrl}location`);
//     const data = await resp.json();
//     setData(data);
//     // setLoading(false);
//     // console.log(data);
//   };

//   useEffect(() => {
//     DataByAPI();
//   }, []);

//   return (
//     // <View>
//     //   <Text>getData</Text>
//     // </View>

//         <View style={styles.container}>
//           {getData
//             ? getData.map((item) => {
//                 return (
//                   <Card>
//                     <Card.Title
//                       title="Card Title"
//                       subtitle="Card Subtitle"
//                       left={LeftContent}
//                     />
//                     <Card.Content>
//                       <Title>{item.name}</Title>
//                       <Paragraph>{item.taxonomy}</Paragraph>
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

// export default Locations;

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
