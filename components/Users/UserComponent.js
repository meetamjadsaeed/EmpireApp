import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styles from './style'
import users from './data/user'
import { ListItem, Avatar } from 'react-native-elements'
import { useState, useEffect } from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';


const baseUrl = "https://yp.listingprowp.com/wp-json/wp/v2/";

function UserComponent({Id,name}) {
    const navigation = useNavigation(); 
    return (
        <View styles={{ flex: 1 }}>

                        <ListItem bottomDivider  
                        onPress={() => {
                            /* 1. Navigate to the Details route with params */
                            navigation.navigate('User', {
                                userId: Id,
                            });
                          }}
                        >
                            <Avatar rounded size='large' source={require("../../assets/images/profile.jpeg")} />
                            <ListItem.Content>
                                <ListItem.Title>{name} </ListItem.Title>
                                <ListItem.Subtitle>Amjad Saeed</ListItem.Subtitle>
                                <Text
                                    style={styles.textInformation}
                                    // onPress={() => navigation.navigate('Information', { user })}
                                >Entrepreneur</Text>
                            </ListItem.Content>
                        </ListItem>
                    
                    </View>
    );
}

export default UserComponent;