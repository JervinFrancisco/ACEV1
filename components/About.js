import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Icon, Content, Picker, Item } from 'native-base';
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
              <Text style={styles.textBody}>This app was developed as a tool for Border Service Officers. 
                It allows them to Search through vehicules and their concleament methods. 
                Ace was built as a term project by the dotMatrix team in partnership with 
                the CBSA. It's primary front-end developers were Jervin Francisco (dotMatrix 
                team lead and primary developer) and Mike Jalowiecki (front-end Developer). 
                The back-end was developed by Cesar Guerrero (back-end Developer) and Raj 
                Dharaksinh (back-end Developer). The design work was done by Keanu Reeves 
                (Design Lead) with help from Mike Jalowiecki (front-end Developer).
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
    
  },
  textBody: {
    marginTop: 20,
    marginLeft: 10,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'left',
  }
})