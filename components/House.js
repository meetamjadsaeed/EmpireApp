import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';




function House( {cover, name, price, Id} ){
    const navigation = useNavigation(); 
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate('Listing', {
                listingId: Id,
            });
          }}

        >
        <View style={styles.container}>
            <View>
                <Image 
                source={cover}
                style={styles.cover}
                />
            </View>

            <View style={styles.content}>
                <Text style={styles.description}>
                    {name}
                </Text>
                <Text style={styles.price}>
                {price}
                </Text>
            </View>

        </View>
        </TouchableOpacity>

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