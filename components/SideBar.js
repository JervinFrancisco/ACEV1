
// import React from "react";
// import { AppRegistry, Image, StatusBar } from "react-native";
// import { Container, Content, Text, List, ListItem } from "native-base";
// const routes = ["Home", "Chat", "Profile"];
import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import {
  SwitchIOS,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { Container } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';


export default class SideBar extends Component {

  constructor(props) {
  super(props);
  this.state={
    navigateDrawer:props.na
  }
  }
  componentDidMount() {


  }

  navDrawer=()=>{
    this.state.navigateDrawer("About")
  }

  navDrawer2=()=>{
    this.state.navigateDrawer("Tutorial")
  }


  render() {
console.log(this.props)
    return (
      <Container>
      <View style={styles.controlPanel}>
        <View style={styles.drawerHeaderContainer}>
          <Text style={styles.drawerTitleText}>Ava Miller</Text>
          <Text style={styles.drawerSubtitleText}>ava_miller@cbsa.gc.ca</Text>
        </View>

      <TouchableOpacity
        style={styles.drawerListItem}
          onPress={this.navDrawer2}>
        <Ionicons name="md-cube" color="white" size={24} style={{marginRight: 10}}></Ionicons>
        <Text style={{color:"white", fontSize: 18}}>Tutorial</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.drawerListItem}
        onPress={this.navDrawer}>
        <Ionicons name="md-hammer" color="white" size={24} style={{marginRight: 10}}></Ionicons>
        <Text style={{color:"white", fontSize: 18}}>About Ace</Text>
      </TouchableOpacity>
      </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  controlPanel: {
    flex: 1,
    backgroundColor:"#05162E",
    elevation: 2,
  },

  drawerHeaderContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#0D2847",
    padding: 16
  },

  drawerListItem: {
    height: 64,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#0D2847",
  },

  drawerTitleText: {
    fontSize: 24,
    color: "#fff"
  },

  drawerSubtitleText: {
    fontSize: 18,
    color: "#84A2C4"
  }

})

// export default class SideBar extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Content>
//           <Image
//             source={{
//               uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
//             }}
//             style={{
//               height: 120,
//               alignSelf: "stretch",
//               justifyContent: "center",
//               alignItems: "center"
//             }}>
//             </Image>
//             <Image
//               square
//               style={{ height: 80, width: 70 }}
//               source={{
//                 uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
//               }}
//             >
//           </Image>
//           <List
//             dataArray={routes}
//             renderRow={data => {
//               return (
//                 <ListItem
//                   button
//                   onPress={() => this.props.navigation.navigate(data)}>
//                   <Text>{data}</Text>
//                 </ListItem>
//               );
//             }}
//           />
//         </Content>
//       </Container>
//     );
//   }
// }