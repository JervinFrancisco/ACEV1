import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, TouchableHighlight,Image, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, Icon, Left, Body, Right, Switch, Button } from 'native-base';


const ref = React.createRef();
export default class Tutorial extends Component {
    constructor(props) {
      super(props);
    }

    static navigationOptions = {
      headerTransparent: true,
      headerStyle:{
        backgroundColor: "transparent"
      }
      }
   
    render() {
      const {navigate} = this.props.navigation;
        return (
          <Container>
            <ImageSlider images={[
          require('../assets/tut1.png'),
          require('../assets/tut2.png'),
          require('../assets/tut3.png'),
          require('../assets/tut4.png'),
        ]}/>
        <Container style={{ display: "none" }}>
        <Button onPress={() => { navigate("Search")}} ref={ref} title="Press Me" >

        </Button>
      </Container>
      </Container>

      
      )

        
      }
  }