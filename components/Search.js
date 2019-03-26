import React from 'react';
//from 'react-native';
import Nav from './Nav';
import DropDowns from './DropDowns';
import SideBar from './SideBar';
import { Font , AppLoading} from 'expo';
import { StyleSheet, Button , TouchableHighlight,Image, TouchableOpacity, View} from 'react-native';
import Drawer from 'react-native-drawer'
import { Container, Header, Content, Form, Item, Picker, Icon, Text, ListItem } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
var self
const ref = React.createRef();
export default class Search extends React.Component {
  
  closeDrawer = () => {
    this.refs.drawer.close()
  };

  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
     
      car: [],
      make: undefined,
      model: undefined,
      year: undefined,
      loading: true,
      drawerOpen: false
      // voice: false,
      // speechToText: "No voice input"

    }

  }

  
componentDidMount(){
    
  }

  async componentWillMount() {
    await Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });

    
    } 

  onValueChange2(value) {
    this.setState({
      make: value
    });

  }

  onValueChange3(value) {
    this.setState({
      model: value,
    });

  }


  onValueChange4(value) {
    this.setState({
      year: value
    });

  }

  savedData() {
    let obj = {
      make: this.state.make,
      model: this.state.model,
      year: this.state.year
    }

    this.state.car.push(obj)
    console.log(this.state.car)
  }

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
     <Image
       style ={{marginLeft:10}}
        source={require('../assets/icons8-menu-26.png')}
      />
        </TouchableOpacity>
    ),
    headerRight: (
      <View style ={{   flexDirection: 'row', 
      alignSelf: 'flex-start', paddingTop: 12, marginRight: 11}}>
      <TouchableOpacity
      style={{backgroundColor: 'transparent'}}
      onPress={() => {
        var yo = ref;
       yo.current.props.onPress()
      }}>
     <Image
       style ={{marginLeft:10}}
        source={require('../assets/icons8-ballot-30.png')}
      />
        </TouchableOpacity>
           <TouchableOpacity
           style={{backgroundColor: 'transparent'}}
           onPress={() => {
             var yo = ref;
            yo.current.props.onPress()
           }}>
          <Image
            style ={{marginLeft:10, marginTop:3}}
             source={require('../assets/icons8-micro-32.png')}
           />
             </TouchableOpacity>
             </View>
    ),
   
  }

  //
  render() {
    if (this.state.loading) {
      return false;
    }
    const {navigate} = this.props.navigation;
   
    return (

      <Drawer
      ref= {this.myRef}
      content={<SideBar />}
      type="overlay"
      styles={drawerStyles}
      openDrawerOffset={100}
      //tweenHandler={Drawer.tweenPresets.parallax}
      open={false}
      tapToClose={true}
      panCloseMask={0.0}
      closedDrawerOffset={-3}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/0 }
      })}
      
      >

    
      <Container style ={styles.container}>
      
    

        <Content padder>
          <Form >
          <ListItem itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelText}>Make</Text>
            </ListItem>    
            <Item picker style ={styles.itemPicker}>
  
              <Picker
                mode="dialog"
                androidIcon={<Icon name="arrow-down" />}
                style={{width: 100, height: 60,color:"#fff", transform:([{ scaleY: 1.5 }])}}
                
                itemStyle={{
                  backgroundColor: "#183553",
                  height: 50,
                  width: 150,
                  fontSize: 50,
                }}
                placeholder="Select Make"
                placeholderStyle={{ color: "#bfc6ea"}}
                placeholderIconColor="#007aff"

                selectedValue={this.state.make}
                onValueChange={this.onValueChange2.bind(this)}
                
              >
                <Picker.Item label="Honda" value="Honda" />
                <Picker.Item label="BMW" value="BMW" />
                <Picker.Item label="Jeep" value="Jeep" />
                <Picker.Item label="Dodge" value="Dodge" />
                <Picker.Item label="Mercedes Benz" value="Mercedes Benz" />
                <Picker.Item label="BMW" value="BMW" />
                <Picker.Item label="Jeep" value="Jeep" />
                <Picker.Item label="Dodge" value="Dodge" />
                <Picker.Item label="Mercedes Benz" value="Mercedes Benz" />
                <Picker.Item label="BMW" value="BMW" />
                <Picker.Item label="Jeep" value="Jeep" />
                <Picker.Item label="Dodge" value="Dodge" />
                <Picker.Item label="Mercedes Benz" value="Mercedes Benz" />
                <Picker.Item label="BMW" value="BMW" />
                <Picker.Item label="Jeep" value="Jeep" />
                <Picker.Item label="Dodge" value="Dodge" />
                <Picker.Item label="Mercedes Benz" value="Mercedes Benz" />
                <Picker.Item label="BMW" value="BMW" />
                <Picker.Item label="Jeep" value="Jeep" />
                <Picker.Item label="Dodge" value="Dodge" />
                <Picker.Item label="Mercedes Benz" value="Mercedes Benz" />
                <Picker.Item label="BMW" value="BMW" />
                <Picker.Item label="Jeep" value="Jeep" />
                <Picker.Item label="Dodge" value="Dodge" />
                <Picker.Item label="Mercedes Benz" value="Mercedes Benz" />
              </Picker>
            </Item>
            <ListItem itemDivider itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelText}>Model</Text>
            </ListItem>   
            <Item picker style ={styles.itemPicker}>
              <Picker
                mode="dialog"

                style={{width: 100, color:"#fff",height: 60, transform:([{ scaleY: 1.5}])}}
                placeholder="Select Model"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"

                selectedValue={this.state.model}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Picker.Item label="Civic" value="Civic" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
            <ListItem itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelText}>Year</Text>
            </ListItem>   
            <Item picker style ={styles.itemPicker}>
              <Picker
                mode="dialog"
              
                style={{width: 100, color:"#fff", height: 60, transform:([{ scaleY: 1.5 }])}}
                placeholder="Select Year"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.year}
                onValueChange={this.onValueChange4.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>
          <View style = {{marginTop: 50}}>
          <TouchableOpacity   onPress={() => navigate('Result')}style ={styles.buttonSavedStyle}>
         <Text style ={{color: "white",  fontWeight:"600",
    fontSize: 20,}}>View Vehicle</Text>
          </TouchableOpacity>
      
          </View>
        </Content>
 
        
       
  
      <Container style = {{display:"none"}}>
          <Button  onPress={(c) => {
            
            if(this.state.drawerOpen){
              this.myRef.current.close()
            }

            this.myRef.current.open()
            this.state.drawerOpen = true

              

          //  if(this.state.drawerOpen == false){
          //   console.log("open")
          //   console.log()
          //   this.myRef.current.open()
          //   this.state.drawerOpen = true
          //   console.log(this.state.drawerOpen)
          //   }else{
          //   console.log("close")
          //   this.myRef.current.close()
          //   this.state.drawerOpen = false
          //   }
            
            
            }} ref = {ref} title="Press Me" > 
          
      </Button>
      </Container>
      </Container>
     </Drawer>
    );
  }


}
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
const styles = StyleSheet.create({
  container:{
    backgroundColor : "#0D2847"
  },
  
  listLabel: {
  marginTop: 40,
  backgroundColor: 'transparent',
  textAlign: 'center',
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