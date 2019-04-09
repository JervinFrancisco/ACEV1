import React from 'react';
//from 'react-native';
import Nav from './Nav';
import DropDowns from './DropDowns';
import SideBar from './SideBar';
import { Ionicons } from '@expo/vector-icons';
import { Font, AppLoading } from 'expo';
import { StyleSheet, Button, TouchableHighlight, Image, TouchableOpacity, View } from 'react-native';
import Drawer from 'react-native-drawer'
import { Container, Header, Content, Form, Item, Picker, Icon, Text, ListItem } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Makes from '../assets/makes.json'

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
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
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
        style={{ 
          backgroundColor: 'transparent', marginLeft:15}}
        onPress={() => {
          var yo = ref;
          yo.current.props.onPress()
        }}>
        <Ionicons name="md-menu" size={24} color="white" />
      </TouchableOpacity>
    ),

    headerRight: (
      <View>
        <TouchableOpacity
          style={{ backgroundColor: 'transparent' }}
          onPress={() => {
            var yo = ref2;
            yo.current.props.onPress()
          }}>
          <Ionicons name="md-today" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: 'transparent' }}
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

  render() {
    console.log(Makes)
    if (this.state.loading) {
      return false;
    }
    const { navigate } = this.props.navigation;

    return (
      <Drawer
        ref={this.myRef}
        content={<SideBar na={this.navigateDrawer} />}
        type="overlay"
        styles={drawerStyles}
        openDrawerOffset={100}
        //tweenHandler={Drawer.tweenPresets.parallax}
        open={false}
        tapToClose={true}
        panCloseMask={0.0}
        closedDrawerOffset={-3}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 0 }
        })}
      >

      {/* MAIN CONTENT */}

        <Container style={styles.container}>
          <Content>
            <Form style={styles.mmmForm}>

            <Text style={styles.listLabelText}>MAKE</Text>  

              <Picker
                mode="dialog"
                style={styles.itemPicker}
                placeholder="Select Make"
                prompt = "Select Make"
                selectedValue={this.state.make}
                onValueChange={this.makeValueSaved.bind(this)}>
                {
                  this.state.makes.map(make => (
                    <Picker.Item key={Date.now()} label={make} value={make} />
                  ))
                }
                </Picker>
              
              <Text style={styles.listLabelText}>MODEL</Text>

                <Picker
                  mode="dialog"
                  style={styles.itemPicker}
                  placeholder="Select Model"
                  prompt = "Select Model"
                  selectedValue={this.state.model}
                  onValueChange={this.modelValueSaved.bind(this)}
                >
                  <Picker.Item label="Civic" value="Civic" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>

              <Text style={styles.listLabelText}>YEAR</Text>
              {/*}
              <ListItem itemDivider style={styles.listLabel}>
                <Text style={styles.listLabelText}>Year</Text>
                </ListItem>*/}

                <Picker
                  mode="dialog"
                  style={styles.itemPicker}
                  placeholder="Select Year"
                  //placeholderStyle={{ color: "#bfc6ea" }}
                  //placeholderIconColor="#007aff"
                  prompt = "Select Year"
                  selectedValue={this.state.year}
                  onValueChange={this.yearValueSaved.bind(this)}
                >
                  <Picker.Item label="2019" value="2019" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>

            {/* View Vehicle Button */}
            <View>
              <TouchableOpacity onPress={() => { this.savedData() }} style={styles.viewVehicleButton}>
                <Text style={styles.buttonText}>VIEW VEHICLE</Text>
              </TouchableOpacity>
            </View>
            </Form>
          </Content>

          <Container style={{ display: "none" }}>
            <Button onPress={(c) => {
              navigate("Bulletins")

            }} ref={ref2} title="Press Me" >

            </Button>
          </Container>


          <Container style={{ display: "none" }}>
            <Button onPress={(c) => {

              if (this.state.drawerOpen) {
                this.myRef.current.close()
              }

              this.myRef.current.open()
              this.state.drawerOpen = true

            }} ref={ref} title="Press Me" >

            </Button>
          </Container>
        </Container>
      </Drawer>
    );
  }


}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  /*main: { paddingLeft: 3 },*/
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D2847",
    padding: 15
  },
  
  mmmForm: {
  },

  /*
  listLabel: {
    marginTop: 40,
    backgroundColor: 'transparent',
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",
  },*/

  itemPicker: {
    marginBottom: 25,
    color: "white",
    backgroundColor: "#173553",
  },

  listLabelText: {
    fontWeight: "600",
    color: "#BBB",
    textAlign: "center",
    letterSpacing: 2.5,
    marginBottom: 10,
  },

  itemPicker1: {
    /*
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    backgroundColor: "#0D2847",
    textAlign: "center",*/
  },

  viewVehicleButton: {
    backgroundColor: "#4AA7D1",
    borderRadius: 2.5,
    justifyContent: "center",
    height: 60,
    color: "white",
    fontWeight: "600",
    textAlign: "center"
  },

  buttonHidden: {
    display: "none"
  },

  buttonText: {
    color:"white",
    fontWeight: "600",
    textAlign: "center"
  },
})