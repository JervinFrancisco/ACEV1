import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Picker, Icon, Textarea, Button, ListItem, Label } from 'native-base';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity,Animated,  Keyboard, KeyboardAvoidingView, TextInput  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { ImagePicker, Permissions, Camera } from 'expo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Login extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
      }

      loginPressed() {
        console.log("Login pressed");
      }


      render() {
          return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.logoView}>
                <Image style={styles.logo} source={require("../assets/aceLogo.png")}></Image>
                <Text style={styles.titleText}>Search or Add concealment methods using our growing database</Text>
              </View>
              <View style={styles.formView}>
                <TextInput style={styles.input} placeholder="employee id" placeholderTextColor="#00A9D5"></TextInput>
                <TextInput style={styles.input} placeholder="password" placeholderTextColor="#00A9D5"></TextInput>
                <TouchableOpacity style={styles.loginBtn} onPress={this.loginPressed()}><Text style={styles.btnText}>LOGIN</Text></TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          );
      }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D2847",
    flex: 1
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  logo: {
    width: 150,
    height: 78
  },
  formView: {
    padding: 20,
    marginBottom: 170
  },
  titleText: {
    color: "#00A9D5",
    marginTop: 10,
    width: 190,
    textAlign: 'center'
  },
  input: {
    height: 40,
    backgroundColor: '#0D3D58',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    opacity: 0.7
  },
  loginBtn: {
    backgroundColor: "#0D2847",
    borderWidth: 1,
    borderColor: '#00A9D5',
    borderRadius: 3,
    paddingVertical: 15
  },
  btnText: {
    color: "#00A9D5",
    textAlign: 'center',
    fontWeight: '800'

  }

})