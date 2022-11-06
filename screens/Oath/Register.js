import React from 'react'
import styles from "../../styles/style";

import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
// import { Button } from "react-native-elements";
// import * as Facebook from "expo-facebook";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Home from "../Home";


const Register = () => {
  return (
    <View style={styless.container}>
    {/* <Button containerStyle={styles.fbLoginButton} onPress={() => onLoginPress()}>Login</Button> */}
    
    
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginScreenContainer}>
              <View style={styles.loginFormView}>
                <Text style={styles.logoText}>Register Yourself</Text>
                <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} /> 
                <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} /> 
                <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                {/* <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Login" /> */}
                <Button containerStyle={styles.fbLoginButton}>Register</Button>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    
        </View>
    
  )
}

export default Register


const styless = StyleSheet.create({
    scrollView: {
      marginHorizontal: 20,
    },
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
  });