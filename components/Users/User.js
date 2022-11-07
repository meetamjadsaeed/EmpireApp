import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Avatar, AirbnbRating } from "react-native-elements"




const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";



export default function User({ route, navigation }) {
    const [avaliacao, setAvaliacao] = useState(5)

    const [getData, setData] = useState();

        const fetchData = async () => {
            const resp = await fetch(`${baseUrl}users/109`);
            const data = await resp.json();
            // console.log(data);
            setData(data);
            // setLoading(false);
            // console.log(data);
            // console.log(getData);
          };
        
          useEffect(() => {
            fetchData();
            // console.log(getData.id);
          }, []);


    function ratingCompleted(rating) {
        setAvaliacao(rating)
    }

    return (
        <View>
            <Card containerStyle={styles.card} wrapperStyle={{}}>
                <View style={styles.avatar} >
                    <Avatar rounded size='xlarge' source={{ uri: route.params?.user.avatarUrl }} />
                </View>
                <Card.Title style={styles.cardTitle} >{route.params?.user.name}</Card.Title>
                <Card.Divider />
                <View>
                    <Text style={styles.infoText}>{ getData ? getData.name : null }</Text>
                    <Text style={styles.text}>Description: { getData ? getData.description : null }</Text>
                    <Text style={styles.text}>Phone: {route.params?.user.profissao}</Text>
                    <Text style={styles.text}>E-mail: {route.params?.user.email}</Text>
                </View>
            </Card>

            <Card containerStyle={styles.card} wrapperStyle={{}}>
                <View>
                    <AirbnbRating
                        count={5}
                        reviews={['Péssimo', 'Ruim', 'Bom', 'Muito bom', 'Ótimo']}
                        defaultRating={5}
                        size={20}
                        onFinishRating={ratingCompleted}
                    />
                </View>
            </Card>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Contatos')}
            >
                <FontAwesome name='arrow-left' size={23} color='#fff'></FontAwesome>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}























// import { View, Text, ImageEditor } from "react-native";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import * as React from 'react';
// import { Appbar } from "react-native-paper";
// import { StyleSheet, StatusBar, ScrollView } from "react-native";
// import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
// const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

// const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";


// const User = (props) => {
//     const [getData, setData] = useState();

//     const fetchData = async () => {
//         const resp = await fetch(`${baseUrl}users/1`);
//         const data = await resp.json();
//         // console.log(data);
//         setData(data);
//         // setLoading(false);
//         // console.log(data);
//         // console.log(getData);
//       };
    
//       useEffect(() => {
//         fetchData();
//         // console.log(getData.id);
//       }, []);



//   return (
//     <ScrollView style={styles.scrollView}>
//     <View>
//          <Card>
//     <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
//     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
//     <Card.Content>
//       <Title>{ getData ? getData.name : null}</Title>
//       <Paragraph>{ getData ? getData.description : null}</Paragraph>
//     </Card.Content>
//   </Card>

//    </View>
//    </ScrollView>
//   )
// }

// export default User



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