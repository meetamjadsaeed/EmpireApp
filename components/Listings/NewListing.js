import React from "react";

import styles from "../../styles/style";

import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from "react-native";
// import { Button } from "react-native-elements";
// import * as Facebook from "expo-facebook";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperSelect } from "react-native-paper-select";
import { useState, useEffect } from "react";
import DialogBox from "../DialogBox";

function newListing(props) {
  function create() {
    return say;
  }

//   https://anurag-srivastava.gitbook.io/react-native-paper-select/guides/basic-usage

  const [colors, setColors] = useState({
    value: "",
    list: [
      { _id: "1", value: "BLUE" },
      { _id: "2", value: "RED" },
      { _id: "3", value: "GREEN" },
      { _id: "4", value: "YELLOW" },
      { _id: "5", value: "BROWN" },
      { _id: "6", value: "BLACK" },
      { _id: "7", value: "WHITE" },
      { _id: "8", value: "CYAN" },
    ],
    selectedList: [],
    error: "",
  });

  return (
    <View style={styless.container}>
      {/* <Button containerStyle={styles.fbLoginButton} onPress={() => onLoginPress()}>Login</Button> */}

      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Create New Listing</Text>
              <TextInput
                placeholder="Title"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Content"
                placeholderTextColor="grey"
                numberOfLines={10}
                multiline={true}
                style={styles.loginFormTextInput}
              />
              <Button onPress={() => navigation.push("Front")}>
                Upload Thumbnail 🙂
              </Button>

              <TextInput
                placeholder="Categories"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              <TextInput
                placeholder="Tags"
                placeholderColor="#c4c3cb"
                style={styles.loginFormTextInput}
              />
              {/* 
<PaperSelect
  label="Select Colors"
  value={colors.value}
  onSelection={(value: any) => {
    setColors({
      ...colors,
      value: value.text,
      selectedList: value.selectedList,
      error: '',
    });
  }}
  arrayList={[...colors.list]}
  selectedArrayList={colors.selectedList}
  errorText={colors.error}
  multiEnable={true}
  textInputMode="flat"
  searchStyle={{ iconColor: 'red' }}
/>; */}

              {/* <Button onPress={() => navigation.push("Front")}>Create</Button> */}
              <DialogBox/>

              {/* <Button containerStyle={styles.fbLoginButton} type='clear' onPress={() => onFbLoginPress()} title="Login With Facebook" /> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

export default newListing;

const styless = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
