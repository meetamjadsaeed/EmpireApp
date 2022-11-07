import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

function Nav(props) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    //    <Provider>
    //   <View
    //     style={{
    //       paddingTop: 50,
    //       flexDirection: 'row',
    //       justifyContent: 'center',
    //     }}>
    //     <Menu
    //       visible={visible}
    //       onDismiss={closeMenu}
    //       anchor={<Button onPress={openMenu}>Show menu</Button>}>
    //       <Menu.Item onPress={() => {}} title="Item 1" />
    //       <Menu.Item onPress={() => {}} title="Item 2" />
    //       <Divider />
    //       <Menu.Item onPress={() => {}} title="Item 3" />
    //     </Menu>
    //   </View>
    // </Provider>
    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="#000" />
        <TextInput placeholder="Search Listing" style={styles.input} />
      </View>
    </View>
  );
}

export default Nav;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  header:{
    paddingHorizontal: 15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    marginVertical:20,
},
inputArea:{
    paddingHorizontal: 15,
    flexDirection:'row',
    alignItems:'center',
    width:'98%',
    backgroundColor:'#fff',
    elevation:2,
    height:37,
    borderRadius:10,
},
input:{
    fontFamily:'Montserrat_500Medium',
    paddingHorizontal:10,
    fontSize:13,
    width:'90%',
},
});
