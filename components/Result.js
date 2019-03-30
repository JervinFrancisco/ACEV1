import React from 'react';
//from 'react-native';
import Nav from './Nav';
import MethodList from './MethodList';
import { Ionicons } from '@expo/vector-icons';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { Container, Header, Content, List, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ListItem, withTheme } from 'react-native-elements'
import { FloatingAction } from 'react-native-floating-action';
import { Svg } from 'expo';
const { Circle, Rect, Path } = Svg;


const ref = React.createRef();
const front = React.createRef();
export default class Result extends React.Component {

  constructor(props) {
    console.log("yo",props.state)
    super(props);
<<<<<<< HEAD
    
    this.state={  tab : null,
      activePage : 2,
      hover : false,
=======
    this.state = {
      tab: null,
      activePage: 2,
      hover: false,
>>>>>>> 5d48811988930b049713db348959c1836f4fb4b3
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
<<<<<<< HEAD
      hover6: false}
  
 }

 componentWillMount(){
   this.animatedValue = new Animated.Value(0)
 }


 componentDidMount(){
  setTimeout(() => {
  const { navigation } = this.props
 
  const data = navigation.getParam('data', 'NO DATA')
console.log("YOOOO", data)
  },3000)

Animated.timing(this.animatedValue,{
  toValue:150,
  duration:1500
}).start();
 }
=======
      hover6: false
    }

  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }
>>>>>>> 5d48811988930b049713db348959c1836f4fb4b3
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0D2847',


    },
    headerTitle: "ACE",
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
        <Ionicons name="md-arrow-back" size={32} color="white" />

      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{
        flexDirection: 'row',
        alignSelf: 'flex-start', paddingTop: 12, marginRight: 10
      }}>
        <TouchableOpacity
          style={{ backgroundColor: 'transparent' }}
          onPress={() => {
            var yo = ref;
            yo.current.props.onPress()
          }}>

          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain'
            }}
            source={require('../assets/info.png')}
          />
        </TouchableOpacity>

      </View>
    ),

  }
  tabView(c) {
    this.setState(activePage)
  }
  toggle = () => {
    this.setState({ hover: !this.state.hover });
  };
  toggle2 = () => {
    this.setState({ hover2: !this.state.hover2 });
  };
  toggle3 = () => {
    this.setState({ hover3: !this.state.hover3 });
  };
  toggle4 = () => {
    this.setState({ hover4: !this.state.hover4 });
  };

  render() {
    const { navigate } = this.props.navigation;
    const actions = [{
      text: 'Accessibility',
      icon: require('../assets/drugs.jpeg'),
      name: 'bt_accessibility',
      position: 2
    }, {
      text: 'Language',
      icon: require('../assets/drugs.jpeg'),
      name: 'bt_language',
      position: 1
    }, {
      text: 'Location',
      icon: require('../assets/drugs.jpeg'),
      name: 'bt_room',
      position: 3
    }, {
      text: 'Video',
      icon: require('../assets/drugs.jpeg'),
      name: 'bt_videocam',
      position: 4
    }];
    return (
      <Container >
        <Container  >
          <View style={styles.container2}>
            <Text>Mercedes Benz CLA250 2019</Text>


            <Svg height="70%" width="70%" viewBox="0 0 1210.14 411.4">

              <Path
                fill={this.state.hover ? 'white' : 'grey'}
                onPress={() => { this.tabView.goToPage(3) }}
                onPressIn={this.toggle}
                onPressOut={this.toggle}
                ref={front}
                d="M1185.91,166.26c12.7-83.81,4.3-70.22-26-71.11-35.43-1.27-97.6-.85-97.6-.85l-53.85-27.24L986.81,212.63s70.12,7.7,73.81,100.09l0,.8c2.57,9.76,91,9.14,91.4-.8,9.29-8.7,30.32-8.75,34.71-16.93C1218.38,230.44,1185.91,166.26,1185.91,166.26Z"
              />
              <Path

                fill={this.state.hover2 ? 'white' : 'grey'}
                onPressIn={this.toggle2}
                onPressOut={this.toggle2}
                onPress={() => this.tabView.goToPage(0)}
                d="M139.44,284.38c7-29.46,35.65-54.26,35.65-54.26,69.76-52.7,131.76,0,131.76,0h77.51L338.15,124.73a13.71,13.71,0,0,1-2,.7C-10,160.55,16.84,228.24,13.8,234.55c0,52.67,0,78.9,20.55,83.42s26.81,17.61,26.81,17.61h77.42A125,125,0,0,1,139.44,284.38Z" />

              <Path fill={this.state.hover3 ? 'white' : 'grey'}
                onPressIn={this.toggle3}
                onPressOut={this.toggle3}

                onPress={() => this.tabView.goToPage(2)}
                d="M875.42,243.74H321.58s26.21,18.61,25.42,91.84H856.7C855.48,317.86,854.7,272.32,875.42,243.74Z" />
              <Path
                onPress={() => this.tabView.goToPage(1)}
                fill={this.state.hover4 ? 'white' : 'grey'}
                onPressIn={this.toggle4}
                onPressOut={this.toggle4}
                d="M990.35,57.9C904.85,6.26,794.79,9.81,794.79,9.81H583.24C504.22,17.12,446.52,59,446.52,59c-50.41,33.39-78.26,50-93.38,58.31l49,112.86H894.35c43.4-34.1,75.18-20.92,75.18-20.92l23.7-149.85ZM658.56,149.1c-85.19,6.93-243.45,8-243.45,8s-9.51-4.55-5.66-13.48c6.41-14.87,27.71-41.89,95.66-80.23,60.75-31.79,122.42-36.61,174.45-35C679,67.06,669.9,119.94,658.56,149.1Zm238.6-5.58c-58,7.68-130.89,7.65-204.52,4.54-6.81-34.18-1.78-86.55,7-113,2.53-10.43,103.92-6.95,139.11,2,40.64,14.38,54.89,53.77,66,100C904,139.45,899.55,142.83,897.16,143.52Z" />
              <Circle onPress={() => this.tabView.goToPage(2)} fill={this.state.hover3 ? 'white' : 'grey'}
                onPressIn={this.toggle3}
                onPressOut={this.toggle3} cx="957.99" cy="310.67" r="87.57" />
              <Circle onPress={() => this.tabView.goToPage(2)} fill={this.state.hover3 ? 'white' : 'grey'}
                onPressIn={this.toggle3}
                onPressOut={this.toggle3} cx="241.4" cy="310.41" r="87.57" />

            </Svg>



          </View>

        </Container>


        <ScrollableTabView
          refreshControlStyle={{ backgroundColor: 'red' }}
          renderTabBar={() => <ScrollableTabBar />}
          style={{ marginTop: -220, backgroundColor: "#0D2847" }}
          tabBarTextStyle={{ color: "white", fontSize: 27 }}
          tabBarUnderlineStyle={{ backgroundColor: "white" }}
          ref={(tabView) => { this.tabView = tabView; }}

        >

          <ScrollView tabLabel="Front/Engine" >
            <View >
              <Container >

                <Content>
                  <ListItem
                    key={1233}
                    leftAvatar={{ rounded: false, source: require('../assets/drugs.jpeg') }}
                    title={"Drugs"}
                    subtitle={"l.subtitle"}
                  />
                  <ListItem
                    key={1223333}
                    leftAvatar={{ rounded: false, source: require('../assets/drugs.jpeg') }}
                    title={"Drugs"}
                    subtitle={"l.subtitle"}
                  />
                </Content>
              </Container>
            </View>
          </ScrollView>
          <ScrollView page={this.activePage} tabLabel="Center/Cabin" >
          <Container >

<Content>
  <ListItem
    key={1233}
    leftAvatar={{ rounded: false, source: require('../assets/drugs.jpeg') }}
    title={"Drugs"}
    subtitle={"l.subtitle"}
  />
  <ListItem
    key={1223333}
    leftAvatar={{ rounded: false, source: require('../assets/drugs.jpeg') }}
    title={"Drugs"}
    subtitle={"l.subtitle"}
  />
</Content>
</Container>
          </ScrollView>
          <ScrollView tabLabel='Undercariage/Wheels'>
            <View>
              <Text>Two</Text>
            </View>
          </ScrollView>
          <ScrollView tabLabel="Rear/Trunk" >
            <View>
              <Text>Two</Text>
            </View>
          </ScrollView>
        </ScrollableTabView>

        <Container style={{ display: "none" }}>
          <Button onPress={() => { navigate('Add') }} ref={ref} title="Press Me" >

          </Button>
        </Container>
        <FloatingAction

          onPressMain={() => {
            var yo = ref;
            yo.current.props.onPress()
          }}
        />
      </Container>
    )
  }


}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D2847"
  },
  container2: {
    backgroundColor: "#0D2847",
    maxWidth: "auto",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  listLabelText: {
    fontWeight: "600",
    fontSize: 15,
    color: "grey"
  },

  itemPicker: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    backgroundColor: "#183553",
    textAlign: "center",
  },

  buttonSavedStyle: {

    marginTop: 20,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "#4AA7D1",
    height: 60,
    width: 300

  },

  buttonHidden: {
    display: "none"
  }

})