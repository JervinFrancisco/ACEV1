
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
  TouchableOpacity
} from 'react-native';


import styles from './styles';
import Button from './Button';

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

  drawerTesting=()=>{
    this.state.navigateDrawer("TestingComponent")
  }



  render() {
console.log(this.props)
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
         Ava Miller
        </Text>
        <Text style={styles.controlPanelWelcome2}>
         ava_miller@cbsa.gc.ca
        </Text>
        
      <TouchableOpacity
        style={styles.button}
        underlayColor="#B5B5B5"
          onPress={this.navDrawer2}>
        <Text style={{color:"white", fontSize: 18}}>Play Tutorial</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.navDrawer}>
        <Text style={{color:"white", fontSize: 18}}>About Ace</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.drawerTesting}>
        <Text style={{color:"white", fontSize: 18}}>Testing</Text>
      </TouchableOpacity>
      </View>
    )
  }
}


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