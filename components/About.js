import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Drawer, Container, Header, Left, Body, Right, Title, Button, Icon, Content, Picker, Item } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
export default class About extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
      }

      static navigationOptions = {
        headerTitle: "About",
      }

      render() {
          return (
            <Container style={styles.container} >
              <Image source={require('../assets/aceLogo.png')} style={styles.image}
              ></Image>
              <Image source={require('../assets/dotmatrixlogo.png')} style={styles.image}
              ></Image>
              <Text>
              </Text>
            </Container>
          );
      }


}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D2847",
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
    
  },

  textBody: {
    marginTop: 20,
    marginLeft: 10,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'left',
  }
})