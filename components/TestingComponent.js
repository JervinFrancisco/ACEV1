import React from 'react' 
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'; 

 import { createDrawerNavigator, DrawerItems } from 'react-navigation';
 import Icon from 'react-native-vector-icons/FontAwesome5';
 import About from './About'

const AppDrawerNavigator = createDrawerNavigator({
  About: {
    screen: About,
  },
});

export default AppDrawerNavigator
       

/*
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TestingComponent extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'

class WelcomeScreen extends React.Component {
  render () {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Button title="Click Me" onPress={() => this.props.navigation.navigate('Dashboard')}></Button>
      </View>
    )
  }
}

class DashboardScreen extends React.Component {
  render () {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <Text>Dashboard</Text>
      </View>
    )
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardScreen
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{
    screen: WelcomeScreen
  },
  Dashboard:{
    screen: AppDrawerNavigator
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
