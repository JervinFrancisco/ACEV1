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
              <Image source={require('../assets/aceLogo.png')} style={styles.logo}
              ></Image>
              <Image source={require('../assets/dotmatrixlogo.png')} style={styles.dmLogo}
              ></Image>
              <Text style={styles.textBody}>
                  The dotMatrix team: 
              </Text>    
                  <Text style={styles.textBody}>Jervin Francisco - Team Lead</Text>
                  <Text style={styles.textBody}>Keanu Reeves - Design Lead</Text>
                  <Text style={styles.textBody}>Cesar Guerrero - Backend Developer</Text>
                  <Text style={styles.textBody}>Dharaksinh Raj - Backend Developer</Text>
                  <Text style={styles.textBody}>Mike Jalowiecki - Frontend Developer</Text>
              
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
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 225,
    height: 117,
    padding: 10
    
  },
  dmLogo: {
    justifyContent: "center",
    alignItems: "center",
    width: 214,
    height: 87.5,
    marginTop: 10,
    marginBottom: 50
    
  },

  textBody: {
    marginTop: 10,
    marginLeft: 10,
    color: '#FFF',
    fontSize: 15,
    textAlign: 'left',
    width: 300
  }
})