import React, { Component } from 'react';
import ImageSlider from 'react-native-image-slider';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, TouchableHighlight,Image, TouchableOpacity, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, Content, List, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import Onboarding from 'react-native-onboarding-swiper';


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
      /*
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

      
      )*/

      return(
      <Onboarding pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/car-icon.png')} />,
          title: 'You can do stuff!',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/car-icon.png')} />,
          title: 'More cool stuff.',
          subtitle: 'This is a subtitle',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/car-icon.png')} />,
          title: 'Even more!',
          subtitle: 'Another subtitle here',
        },
      ]}/>)
      }
  }