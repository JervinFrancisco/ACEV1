import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, TouchableOpacity, Text, Image, TouchableWithoutFeedback, StyleSheet, ScrollView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Container, Header, Content, List, Icon, Left, Body, Right, Switch, Button, ListItem, Footer, FooterTab,Separator } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const ref = React.createRef();
const http = "http://10.70.158.155:3000/"    


export default class Details extends Component {
  timer;
  constructor(props) {
    super(props)
    this.state = {
      isModalOpened: false,  //Controls if modal is opened or closed
      currentImageIndex: 0,
      showModal: false,
      position: 0,
      interval: null,
      dataSource: null,
      showPlayerControls: true,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }
  openModal(index) {
    this.setState({ showModal: true, currentImageIndex: index })
  }

  handleOpenModal(index) {
    this.setState({ showModal: true, currentImageIndex: index });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  showPlayerControls = () => {
    this.hideWithTimer();
    this.setState({ showPlayerControls: true, });
 
  }

  hidePlayerControls() {
    clearTimeout(this.timer);
    this.setState({ showPlayerControls: false, });
  }

  hideWithTimer() {
    this.timer = setTimeout(() => {
      this.hidePlayerControls()
    }, 4000)
  }



  
  postDiscovered(){
    console.log("postDiscovered",this.state.data)
    let formData={
      "location":this.state.data.location,
        "referenceNo":this.state.data.referenceNo,
        "userID":this.state.data.userId,
    }
    var XHR = new XMLHttpRequest();
var urlEncodedData = "";
var urlEncodedDataPairs = [];
var name;

// Turn the data object into an array of URL-encoded key/value pairs.
for(name in formData) {
console.log(name);
urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(formData[name]));
}

// Combine the pairs into a single string and replace all %-encoded spaces to 
// the '+' character; matches the behaviour of browser form submissions.
urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

// Define what happens on successful data submission
XHR.addEventListener('load', function(event) {
alert('Yeah! Data sent and response loaded.');
});

// Define what happens in case of error
XHR.addEventListener('error', function(event) {
alert('Oops! Something goes wrong.');
});

// Set up our request
XHR.open('POST', `${http}concealments/front/discovered/${this.state.parentid}/${this.state.data._id}`);

// Add the required HTTP header for form data POST requests
XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
XHR.setRequestHeader('x-access-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTkwNGQ2NzE5MTE0MTIxYTAzMzBhZSIsImlhdCI6MTU1NTAzMDcyMiwiZXhwIjoxNTU1MTE3MTIyfQ.lmKMdhAV-c-xoWTSKs3gh1s2k6jG4n0kLdG82qx30pI");


// Finally, send our data.
XHR.send(urlEncodedData);

  }

  componentDidMount() {
    const { navigate } = this.props.navigation
    const { navigation } = this.props
    const data = navigation.getParam('data', 'NO DATA')
    const parentid = navigation.getParam('id', 'NO DATA')
    let images = data.src.map((img, i) => { return { id: i, url: `http://10.70.158.155:3000/${img}` } })

    let position = this.state.position === images.id ? 0 : this.state.position + 1
    let [a, ...rest]=data.discovered
    console.log("rest",rest);
    console.log("first", a)
    this.setState({ title: data.title, description: data.description, dataSource: images, position: position, firstDiscovered:a,restDiscovered:rest,data,parentid })
    this.showPlayerControls()

  }

  static navigationOptions = {

  }

  render() {
    const { navigate } = this.props.navigation;
console.log("dsadasd",this.state.images)
  

    return (
      <Container>



        {this.state.dataSource &&
          <Slideshow

            onPress={(yo) => { this.handleOpenModal(yo.index) }}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}

          />

        }
<ScrollView>
        <View>
          <Modal visible={this.state.showModal} transparent={true} onRequestClose={this.handleCloseModal} onCancel={() => this.handleCloseModal}>
            <ImageViewer imageUrls={this.state.dataSource} index={this.state.currentImageIndex} />
          </Modal>

          <ListItem itemDivider style={styles.listLabel}>
            <Text style={styles.listLabelText}>{this.state.title}</Text>
          </ListItem>
          <ListItem itemDivider style={styles.listLabel}>
            <Text style={styles.listLabelPara}>{this.state.description}</Text>
          </ListItem>
          <ListItem itemDivider style={styles.listLabel}>
          <Collapse>
      <CollapseHeader style={{ borderBottomWidth:0,borderWidth:0, width: 370, height: 90}}>
        <Separator style={{backgroundColor:"transparent",  flexDirection: 'row'}} bordered>
        <Ionicons style={{ padding: 0}}name="md-eye" size={20} color="grey" />
        {this.state.firstDiscovered &&
          <Text style={{backgroundColor:"transparent",flex: 1, paddingRight: 30, paddingLeft: 5,}}>{`Last Discovery: ${this.state.firstDiscovered.location} on March 30th 2019\nRef: ${this.state.firstDiscovered.referenceNo}\nUserId: ${this.state.firstDiscovered.userId}`}</Text>
        }
          <Ionicons style={{ padding: 0}}name="md-arrow-dropdown" size={20} color="grey" />
        </Separator>
      </CollapseHeader>
      <CollapseBody>
      {this.state.restDiscovered &&
      this.state.restDiscovered.map((discovery, i)=>(
        <ListItem key={i} style={{backgroundColor:"transparent",  flexDirection: 'row'}} >
        <Text style={{backgroundColor:"transparent",flex: 1, paddingRight: 30, paddingLeft: 5,}}>{`Ref: ${discovery.referenceNo}\nUserId: ${discovery.userId}`}</Text>
        </ListItem>
    ))  
    }
      </CollapseBody>
    </Collapse>
   
          </ListItem>
        
          <Container style={{ display: "none" }}>
            <Button onPress={() => { navigate('Result') }} ref={ref} title="Press Me" >

            </Button>

          </Container>

        </View>
        </ScrollView>
        {this.state.showPlayerControls ? (
          <Footer style ={styles.bottomView} >
            <FooterTab style= {{backgroundColor:'#0D2847' }}>
            <Ionicons style={{marginTop:6.5, marginLeft:10}}name="md-eye" size={32} color="white" />
                <Text style={{width:230, color:"white", fontSize: 17, marginTop:13.5, marginLeft:18}}>Discovered Something Here?</Text>
          
      
              <Button onPress={()=>{this.postDiscovered()}} >
                <Text  style={{color:"white", fontSize: 17}}> Yes</Text>
              </Button>
              <Button>
                <Text style={{color:"white", fontSize: 17}}>No</Text>
              </Button>
            </FooterTab>
          </Footer>
             ) : null}
      </Container>

    )

  }


}
const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70
  },
  listLabelText: {
    fontWeight: "600",
    fontSize: 30,
    color: "black"
  },
  listLabelPara: {

    fontSize: 20,
    color: "black"
  },
  listLabel: {
    marginTop: 1,
    backgroundColor: 'transparent',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginBottom: 30,

  },
  bottomView:{
    flex: 1,
    width: '100%', 
    height: 50, 
    backgroundColor: '#0D2847', 
  
    justifyContent:"flex-end",
    position: 'absolute',
    bottom: 0,
    elevation: 0
  
  },
})
