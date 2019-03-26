import React from 'react';
//from 'react-native';
import Nav from './Nav';
import MethodList from './MethodList';
import { Ionicons } from '@expo/vector-icons';
import {View, ScrollView, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollableTabView, ScrollableTabBar} from '@valdio/react-native-scrollable-tabview'
import { Container,  Header, Content, List, ListItem,  Icon, Left, Body, Right, Switch} from 'native-base';
//import ImageMapper from 'react-image-mapper';
// MAP = {
//   name: "car-map",
//   areas: [
//     { name: "front", shape: "poly", coords: [0,53,2,70,10,76,28,75,30,63,36,53,45,47,53,45,65,47,69,51,86,51,76,27,42,31,6,43]},
//     { name: "under", shape: "poly", coords: [47,50,38,58,33,68,34,78,39,85,48,90,58,91,65,87,70,83,73,77,203,76,208,85,217,90,227,90,235,87,241,81,243,67,238,56,226,50,213,53,210,55,75,55,67,54,58,51]},
//     { name: "center", shape: "poly", coords: [207,51,92,51,80,25,98,13,124,2,205,2,231,12,226,46]},
//     { name: "rear", shape: "poly", coords: [276,21,249,20,235,13,229,46,240,53,247,63,247,72,268,72,275,69,280,56,277,25,276,21]},
//   ]
// } 

export default class Result extends React.Component {
  
 
  
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0D2847',
    
    },
    headerTitle: "ACE",
    headerTitleStyle: { color: '#fff' },
    headerLeft: (
      <TouchableOpacity
      style={{backgroundColor: 'transparent'}}
      onPress={() => {
        var yo = ref;
       yo.current.props.onPress()
      }}>
      <Ionicons name="md-arrow-back"  size={32} color="white"/>
  
        </TouchableOpacity>
    ),
    headerRight: (
      <View style ={{   flexDirection: 'row', 
      alignSelf: 'flex-start', paddingTop: 12, marginRight: 10}}>
      <TouchableOpacity
      style={{backgroundColor: 'transparent'}}
      onPress={() => {
        var yo = ref;
       yo.current.props.onPress()
      }}>
    
     <Image
       style ={{ width: 30,
        height: 30,
        resizeMode: 'contain'}}
        source={require('../assets/info.png')}
        onPress={this.infoPressed}
      />
        </TouchableOpacity>

             </View>
    ),
   
  }

  
   render() {
      return(
      <Container >
   <Container  >
     <View style ={styles.container2}>
     <Text>Mercedes Benz CLA250 2019</Text>
   <Image
          source={require('../assets/car-icon.png')}
        />
       
       
        </View>
     </Container>
     
     
      <ScrollableTabView
        refreshControlStyle={{backgroundColor: 'red'}}
        renderTabBar={() => <ScrollableTabBar/>}
        style={{marginTop:-220, backgroundColor:"#0D2847"}}
        tabBarTextStyle = {{color:"white", fontSize: 27}}
        tabBarUnderlineStyle ={{backgroundColor:"white"}}
        
      >
     
        <ScrollView  tabLabel="Front/Engine" >
          <View>
          <Container>
     
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
              <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'}}
          source={require('../assets/drugs.jpeg') }
        />
     
              </Button>
            </Left>
            <Body style ={{
                width: 100,
                height: 100,}}>
              <Text>Airplane Mode</Text>
            </Body>
          
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
              <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain'}}
          source={require('../assets/drugs.jpeg') }
        />
     
              </Button>
            </Left>
            <Body style ={{
                width: 100,
                height: 100,}}>
              <Text>Airplane Mode</Text>
            </Body>
          
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
          </View>
        </ScrollView>
        <ScrollView tabLabel="Center/Cabin" >
          <View>
            <Text>Two</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="Undercariage/Wheels" >
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
      </Container>
      )
    }

      // render() {
      //     return (

      //         <View>
      //         {/* <ImageMapper src="../assets/car-icon.png" map={MAP}
      //           onClick={area => this.areaClicked(area)}  
      //         //   //onImageClick optional             */}
          
      //              </View>
      
      //     );
      // }


}
const styles = StyleSheet.create({
  container:{
    backgroundColor : "#0D2847"
  },
  container2:{
    backgroundColor : "#0D2847",
    maxWidth: "auto",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  
  listLabelText:{
    fontWeight:"600",
    fontSize: 15,
    color: "grey"
  },

  itemPicker:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    backgroundColor: "#0D2847",
    color: "#FFFFFF",
    textAlign:"center",
  },

  buttonSavedStyle:{

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
  
  buttonHidden:{
  display:"none"
  }
  
})