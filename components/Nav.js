import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './SideBar';
import { Text } from 'react-native';
export default class Result extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
      }


      render() {
          return (
           <Text> Hey </Text> 
          );
      }


}