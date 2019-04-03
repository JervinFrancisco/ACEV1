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
        headerStyle: {
          backgroundColor: '#0D2847',
    
        },
        headerTitle: "Tutorial",
        headerTitleStyle: { color: '#fff' },
        headerLeft: (
          <TouchableOpacity
            style={{
              backgroundColor: 'transparent', flexDirection: 'row',
              alignSelf: 'flex-start', paddingTop: 12, marginLeft: 10
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
      const {navigate} = this.props.navigation;
        return (
          <Container>
            <ImageSlider images={[
          require('../assets/tut1.png'),
          require('../assets/tut2.png'),
          require('../assets/tut3.png'),
          require('../assets/tut4.png'),
          require('../assets/tut5.png'),
          require('../assets/tut6.png'),
          require('../assets/tut7.png'),
          require('../assets/tut8.png'),
          require('../assets/tut9.png'),
          require('../assets/tut10.png')
          
        ]}/>
        <Container style={{ display: "none" }}>
        <Button onPress={() => { navigate("Search")}} ref={ref} title="Press Me" >

        </Button>
      </Container>
      </Container>

      
      )

        
      }
  }