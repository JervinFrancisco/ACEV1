import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Button, Icon, Content, Picker, Item } from 'native-base';
export default class About extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
      }

      render() {
          return (
            <Text></Text>
          );
      }


}