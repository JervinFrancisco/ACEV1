import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, TouchableOpacity, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Container, Header, Content, List, Icon, Left, Body, Right, Switch, Button,ListItem } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

const ref = React.createRef();


export default class Details extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpened: false,  //Controls if modal is opened or closed
      currentImageIndex: 0,
      showModal: false,
      position: 0,
      interval: null,
     dataSource:null

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
  componentWillMount() {


  }

  componentDidMount(){
    const {navigate} = this.props.navigation
    const { navigation } = this.props
    const data = navigation.getParam('data', 'NO DATA')
    console.log("tis the dsata",data)
    let images=data.src.map((img,i)=>{return {id:i, url:`http://10.70.152.25:3000/${img}`}})
    let position=this.state.position===images.id?0:this.state.position + 1
    this.setState({title: data.title, description: data.description, dataSource: images, position:position})
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0D2847',


    },
    headerTitle: "ACE",
    headerTitleStyle: { color: '#fff' },
    headerLeft: (
      <TouchableOpacity
        style={{
          backgroundColor: 'transparent', flexDirection: 'row',
          alignSelf: 'flex-start', paddingTop: 12, marginLeft: 10
        }}
        onPress={() => {
          var yo = ref;
          yo.current.props.onPress()

        }}>
        <Ionicons name="md-arrow-back" size={32} color="white" />

      </TouchableOpacity>
    ),



  }

  render() {
    const { navigate } = this.props.navigation;


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

        <View>
          <Modal visible={this.state.showModal} transparent={true} onRequestClose={this.handleCloseModal} onCancel={() => this.handleCloseModal}>
            <ImageViewer imageUrls={this.state.dataSource} index={this.state.currentImageIndex} />
          </Modal>

              <ListItem itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelText}>{this.state.title}</Text>
            </ListItem> 
            <ListItem itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelPara}>{this.state.description}</Text>
            </ListItem> 
            <ListItem itemDivider style ={styles.listLabel}>
             
            </ListItem> 
          <Container style={{ display: "none" }}>
            <Button onPress={() => { navigate('Result') }} ref={ref} title="Press Me" >

            </Button>
          </Container>
        </View>
      </Container>
    )

  }


}
const styles = StyleSheet.create({
  image: {
    height: 70,
    width: 70
  },
  listLabelText:{
    fontWeight:"600",
    fontSize:30,
    color: "black"
  },
  listLabelPara:{

    fontSize:20,
    color: "black"
  },
  listLabel: {
    marginTop: 1,
    backgroundColor: 'transparent',
     borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginBottom: 30,
    
    },
})
