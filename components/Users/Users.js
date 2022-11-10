import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styles from './style'
import users from './data/user'
import { ListItem, Avatar } from 'react-native-elements'
import { useState, useEffect } from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";



const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


export default function Users({ navigation }) {
    const [getData, setData] = useState();

    const DataByAPI = async () => {
      const resp = await fetch(`${baseUrl}users`);
      const data = await resp.json();
      setData(data);
      // setLoading(false);
      // console.log(data);
    };
  
    useEffect(() => {
      DataByAPI();
    }, []);

    function getUserItem({ item: user }) {
        return (
            <View styles={{ flex: 1 }}>

{getData
            ? getData.map((item) => {
                return (


                <ListItem key={item.id} bottomDivider  
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('User', {
                        userId: item.id,
                    });
                  }}
                >
                    <Avatar rounded size='large' source={{ uri: user.avatarUrl }} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.slug}</ListItem.Subtitle>
                        <Text
                            style={styles.textInformation}
                            // onPress={() => navigation.navigate('Information', { user })}
                        >Entrepreneur</Text>
                    </ListItem.Content>
                </ListItem>
            
            );
        })
      : null}
            
            </View>
        )
    }

    return (
        <View style={styles.viewContact}>
            <Card.Title title="All Users"/>
                    
            <FlatList
                data={users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View >
    )
}






























// import { View, Text, ImageEditor } from "react-native";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import * as React from 'react';
// import { Appbar } from "react-native-paper";
// import { StyleSheet, StatusBar, ScrollView } from "react-native";
// import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
// const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";

// function Users(props) {
//   const [getData, setData] = useState();

//   const DataByAPI = async () => {
//     const resp = await fetch(`${baseUrl}users`);
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
//                       <Paragraph>{item.description}</Paragraph>
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

// export default Users;

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
