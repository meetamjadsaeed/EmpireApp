import React from "react";
// import styles from "../style/style";

import styles from "../../styles/style";

import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
// import { Button } from "react-native-elements";
// import * as Facebook from "expo-facebook";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

// const appId = "1047121222092614";
// const Stack = createNativeStackNavigator();

export default function LoginScreen(props) {
  // const navigation = useNavigation();

  // const onLoginPress = () => {
  //   props.navigation.navigate('Home')
    
  // };

//   const onFbLoginPress = async () => {
//     try {
//       await Facebook.initializeAsync({
//         appId,
//       });
//       const { type, token } = await Facebook.logInWithReadPermissionsAsync({
//         permissions: ["public_profile", "email"],
//       });
//       if (type === "success") {
//         const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//         Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
//       }
//     } catch ({ message }) {
//       Alert.alert(`Facebook Login Error: ${message}`);
//       console.log(message)
//     }
//   };

  return (
    <View style={styless.container}>
{/* <Button containerStyle={styles.fbLoginButton} onPress={() => onLoginPress()}>Login</Button> */}


<KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Welcome Back</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
            <Button >Login</Button>
            {/* <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onFbLoginPress()} title="Login With Facebook" /> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    </View>
    

  );
}



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