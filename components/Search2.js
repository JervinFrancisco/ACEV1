import React from 'react';
import Nav from './Nav';
import DropDowns from './DropDowns';
import SideBar from './SideBar';
import { Ionicons } from '@expo/vector-icons';
import { Font, AppLoading } from 'expo';
import { StyleSheet, Button, TouchableHighlight, Image, TouchableOpacity, View } from 'react-native';
import Drawer from 'react-native-drawer'
import { Container, Header, Content, Form, Item, Picker, Icon, Text, ListItem } from 'native-base';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Makes from '../assets/makes.json'
var s = require('./styles')

var self
const ref = React.createRef();
const ref2 = React.createRef();

export default class Search extends React.Component {

  closeDrawer = () => {
    this.refs.drawer.close()
  };
  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {

      car: [],
      makes: Makes.makes,
      make: undefined,
      model: undefined,
      year: undefined,
      loading: true,
      drawerOpen: false
      // voice: false,
      // speechToText: "No voice input"
    }
  }

  componentDidMount() {
  }

  makeValueSaved(value) {
    console.log(value);
    this.setState({
      make: value
    }, () => {
      console.log("Make was saved", value)
    });
  }

  modelValueSaved(value) {
    this.setState({
      model: value,
    }, () => {
      console.log("Model was saved", value)
    });
  }

  yearValueSaved(value) {
    this.setState({
      year: value
    }, () => {
      console.log("Year was saved", value)
    });
  }

  savedData() {
    let opts = {
      // body:JSON.stringify(formData),
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTkwNGQ2NzE5MTE0MTIxYTAzMzBhZSIsImlhdCI6MTU1NDc1OTUwNiwiZXhwIjoxNTU0ODQ1OTA2fQ.jMcy7ARN999OFfoEHflrzxaOPLY59LGd8r15Lvj_eM4'
      }
    }

    const { navigate } = this.props.navigation
    fetch('http:/10.70.136.221:3000/vehicles/honda/civic/2019', opts)
      .then(resp => {
        console.log(resp)
        if (resp.status != 200) {
          throw new Error(`${resp.status}`);
        }
        return resp.json()
      })
      .then(data => {
        console.log("this data was consoled", data)
        navigate('Result', { data })
      })
      .catch(err => alert(err.message))

  }

  /* Navigation Bar */
  static navigationOptions = {
    /* Hamburger Menu */
    
    headerLeft: (
      <TouchableOpacity
        style={s.menuButton}
        onPress={() => {
          var yo = ref;
          yo.current.props.onPress()
        }}>
        <Ionicons name="md-menu" size={24} color="white" />
      </TouchableOpacity>
    ),

    headerRight: (
      <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
        <TouchableOpacity
          style={s.menuButton}
          onPress={() => {
            var yo = ref2;
            yo.current.props.onPress()
          }}>
          <Ionicons name="md-today" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={s.menuButton}
          onPress={() => {
            var yo = ref;
            yo.current.props.onPress()
          }}>
          <Ionicons name="md-mic" size={24} color="white" />
        </TouchableOpacity>
      </View>
    ),
  }

  navigateDrawer = (ev) => {
    const { navigate } = this.props.navigation;
    navigate(ev)
  }

  render(){
    return(
<View></View>
    )
    
  }

}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  /*main: { paddingLeft: 3 },*/
}

const styles = StyleSheet.create({
  searchScreenContainer: {
    backgroundColor: "#0D2847",
    padding: 24,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  
  mmmForm: {

  },

  itemPicker: {
    //marginBottom: 25,
    color: "white",
    backgroundColor: "#173553",
    height: 60
  },

  pickerLabelText: {
    fontWeight: "600",
    color: "#BBB",
    letterSpacing: 1.5,
    width: "25%"
  },

  pickerListItem: {
    flex:1, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent:"center",
    marginBottom: 25
  },

  buttonHidden: {
    display: "none"
  },
  
})