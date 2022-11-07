import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import { useState } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Avatar, AirbnbRating } from "react-native-elements"

export default function Home() {
    return (
        <View style={styles.viewPrincipal}>
            <Text>APP Navegação</Text>
            <Text>Home</Text>
        </View>
    )
}