// import React from "react";
// import { AppRegistry, Image, StatusBar } from "react-native";
// import { Container, Content, Text, List, ListItem } from "native-base";
// const routes = ["Home", "Chat", "Profile"];
import React, { Component } from 'react';
import {
  SwitchIOS,
  View,
  Text
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class SideBar extends Component {
  render() {
    
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
         Ava Miller
        </Text>
        <Text style={styles.controlPanelWelcome2}>
         ava_miller@cbsa.gc.ca
        </Text>
     
              <Button
          onPress={() => {
            this._drawer.open();
          }}
          text="Language"
        />
            <Button
          onPress={() => {
            this._drawer.open();
          }}
          text="Play Tutorial"
        />
            <Button
          onPress={() => {
            this._drawer.open();
          }}
          text="About ACE"
        />
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
