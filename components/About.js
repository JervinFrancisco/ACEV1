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
        headerStyle: {
          backgroundColor: '#0D2847',
        },
        headerTitle: "About",
        headerTitleStyle: { color: '#fff' },
    
       
        headerLeft: (
          
          <TouchableOpacity
            style={{
              backgroundColor: 'transparent', paddingLeft:30, paddingRight:18, padding:10,
            }}
            onPress={() => {
              var yo = ref;
              yo.current.props.onPress()
    
            }}>
            <Ionicons name="md-close" size={32} color="white" />
    
          </TouchableOpacity>
        ),
        headerRight: (
          <View style={{
            flexDirection: 'row',
            alignSelf: 'flex-start', paddingTop: 12, marginRight: 10
          }}>
    
          </View>
        ),
    
      }

      render() {
          return (
            <Container style={styles.container} >
              <Image source={require('../assets/ACEImage.png')} style={styles.image}
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
    width: '100%',
    height: '20%'
  },
  textBody: {
    marginTop: 20,
    marginLeft: 10,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'left',

  }
  

  
})