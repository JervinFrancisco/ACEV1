import React from 'react';
//from 'react-native';
import Nav from './Nav';
import DropDowns from './DropDowns';
import SideBar from './SideBar';
import { Ionicons } from '@expo/vector-icons';
import { Font, AppLoading } from 'expo';
import { StyleSheet, TouchableHighlight, Image, TouchableOpacity, View } from 'react-native';
import Drawer from 'react-native-drawer'
import { Container, Header, Content, Form, Item, Picker, Icon, Text, ListItem, Row, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Makes from '../assets/makes.json'
import { ActionSheetProvider, connectActionSheet, } from "@expo/react-native-action-sheet";
var s = require('./styles')

var self
const ref = React.createRef();
const ref2 = React.createRef();
let arr = []
export default class Search extends React.Component {

  closeDrawer = () => {
    this.refs.drawer.close()
  };

  showActionsheet = () => {
    this.ActionSheet.show()
  }
  
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {

      car: [],
      makes: Makes.makes,
      make: 'ford',
      model: undefined,
      year: undefined,
      loading: true,
      drawerOpen: false,
      arrYear: [2019,2018,2017]
      // voice: false,
      // speechToText: "No voice input"
    }
  }

  componentDidMount() {
    

    for(let i = 2019;i > 1989; i--){
        arr.push(i.toString())
    }
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
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTkwNGQ2NzE5MTE0MTIxYTAzMzBhZSIsImlhdCI6MTU1NDkyMjc2MCwiZXhwIjoxNTU1MDA5MTYwfQ.9u7ArBsPIu0SbWMVqD4EvmQgOE16UBgMaID1lTHqDfM'
      }
    }

    const { navigate } = this.props.navigation
    fetch('http://10.70.148.22:3000/vehicles/honda/civic/2019', opts)
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
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <TouchableOpacity
          style={s.menuButton}
          onPress={() => {
            var yo = ref2;
            yo.current.props.onPress()
          }}>
          <Ionicons name="md-today" size={24} color="white" />
        </TouchableOpacity>

        {/*<TouchableOpacity
          style={s.menuButton}
          onPress={() => {
            //var yo = ref;
            //yo.current.props.onPress()
            this.showActionsheet
          }}>
          <Ionicons name="md-more" size={24} color="white" />
        </TouchableOpacity>*/}
      </View>
    ),
  }
  navigateDrawer = (ev) => {
    const { navigate } = this.props.navigation;
    navigate(ev)
  }

  render() {
    console.log("cars",this.state.makes,"END") 
    console.log(Object.keys(this.state.makes)) 
    console.log("makeeeees","")
    if (this.state.loading) {
      return false;
    }
    const { navigate } = this.props.navigation;

    return (
      <Drawer
        ref={this.myRef}
        content={<SideBar na={this.navigateDrawer} />}
        type="displace"
        //styles={drawerStyles} 
        openDrawerOffset={0.2}
        //tweenHandler={Drawer.tweenPresets.parallax}
        open={false}
        tapToClose={true}
        panCloseMask={0.0}
        closedDrawerOffset={-3}
        tweenEasing={"easeOutQuint"}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 0 }
        })}
      >

      {/* MAIN CONTENT */}

        <Container style={styles.searchScreenContainer}>
          <Content>
            <Form style={styles.mmmForm}>

            <View style={styles.pickerListItem}>
            <Text style={styles.pickerLabelText}>MAKE</Text>  
              <Picker
                mode="dialog"
                style={styles.itemPicker}
                placeholder="Select Make"
                prompt = "Select Make"
                selectedValue={this.state.make}
                onValueChange={this.makeValueSaved.bind(this)}>
                {
                  Object.keys(this.state.makes).map(make => (
                    <Picker.Item key={Date.now()} label={make} value={make} />
                  ))
                }
                </Picker>
              
              
            </View>

            
            <View style={styles.pickerListItem}>
            <Text style={styles.pickerLabelText}>MODEL</Text>
            <Picker
                  mode="dialog"
                  style={styles.itemPicker}
                  placeholder="Select Model"
                  prompt = "Select Model"
                  selectedValue={this.state.model}
                  onValueChange={this.modelValueSaved.bind(this)}
                >
                  {
                    this.state.makes[this.state.make].models.map(model => (
                      <Picker.Item key={Date.now()} label={model} value={model} />
                    ))
                  }
                </Picker>
            </View>
                
            <View style={styles.pickerListItem}>
            <Text style={styles.pickerLabelText}>YEAR</Text>
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

                  {
                    arr.map(year =>(
                      <Picker.Item key={Date.now()} label={year} value={year} />
                    ))
                  }
                  {/* <Picker.Item label="2019" value="2019" />
                  <Picker.Item label="2018" value="2018" />
                  <Picker.Item label="2017" value="2017" />
                  <Picker.Item label="2016" value="2016" />
                  <Picker.Item label="2015" value="2015" />
                  <Picker.Item label="2014" value="2014" />
                  <Picker.Item label="2013" value="2013" />
                  <Picker.Item label="2012" value="2012" />
                  <Picker.Item label="2011" value="2011" />
                  <Picker.Item label="2010" value="2010" />
                  <Picker.Item label="2009" value="2009" />
                  <Picker.Item label="2008" value="2008" />
                  <Picker.Item label="2007" value="2007" />
                  <Picker.Item label="2006" value="2006" />
                  <Picker.Item label="2005" value="2005" />
                  <Picker.Item label="2004" value="2004" />
                  <Picker.Item label="2003" value="2003" />
                  <Picker.Item label="2002" value="2002" />
                  <Picker.Item label="2001" value="2001" />
                  <Picker.Item label="2000" value="2000" /> */}

                  
                </Picker>
            </View>
              

{/*
            <View>
              <TouchableOpacity onPress={() => { this.savedData() }} style={s.largeButton}>
                <Text style={s.largeButtonText}>VIEW VEHICLE</Text>
              </TouchableOpacity>
</View>*/}

<Button block iconLeft onPress={() => { this.savedData() }} style={{backgroundColor:"#4AA7D1", height: 50, marginBottom: 25}}>
                <Icon name="car"></Icon>
                <Text style={{fontSize: 18}}>View Vehicle</Text>
          </Button>
{/*
                  <Button block iconLeft transparent light>
                    <Icon name="mic"></Icon>
                    <Text style={{fontSize: 16}}>Use Voice</Text>
</Button>*/}
          
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
  drawer: { 
    shadowColor: '#000000', 
    shadowOpacity: 0.8, 
    shadowRadius: 3
  },
  main: { paddingLeft: 3 },
}

const styles = StyleSheet.create({
  searchScreenContainer: {
    backgroundColor: "#0D2847",
    padding: 24,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
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
    fontSize: 18,
    fontWeight: "600",
    color: "#84A2C4",
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