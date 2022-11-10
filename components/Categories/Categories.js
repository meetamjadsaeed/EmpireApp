




import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function Categories( {name,id }){
    const navigation = useNavigation(); 
    return(
        <TouchableOpacity 
        onPress={() => {
            navigation.navigate('Category', {
                catId: id,
            });
          }}
        
        >
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.description}>
                    {name}
                </Text>
            </View>

        </View>
        </TouchableOpacity>
    );
}

export default Categories;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:150,
        height:50,
        backgroundColor:'#fff',
        elevation:2,
        padding:10,
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
        fontSize:22,
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

// function Categories(props) {
//   const [Categories, setCategories] = useState();

//   const DataByAPI = async () => {
//     const resp = await fetch(`${baseUrl}categories`);
//     const data = await resp.json();
//     setCategories(data);
//     // setLoading(false);
//     // console.log(data);
//   };

//   useEffect(() => {
//     DataByAPI();
//   }, []);

//   return (
//     // <View>
//     //   <Text>Categories</Text>
//     // </View>

//         <View style={styles.container}>
//           {Categories
//             ? Categories.map((item) => {
//                 return (
//                   <Card>
//                     <Card.Title
//                       title="Card Title"
//                       subtitle="Card Subtitle"
//                       left={LeftContent}
//                     />
//                     <Card.Content>
//                       <Title>{item.name}</Title>
//                       {/* <Paragraph>{item.content.rendered.slice(0, 250)}</Paragraph> */}
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

// export default Categories;

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
