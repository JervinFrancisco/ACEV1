import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, TouchableOpacity, Text, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Container, Header, Content, List, Icon, Left, Body, Right, Switch, Button,ListItem } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
const images = [
  {
    id: 0,
    url: 'https://cdn.vox-cdn.com/thumbor/nNsn33uQcSzEN8OzHU8_vCufjl4=/0x0:1800x1013/1820x1213/filters:focal(756x363:1044x651):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60154183/Webp.net_resizeimage__5_.0.jpg'
  },
  {

    id: 1,
    url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Featured-Super-Saiyan-Blue-Vegeta-Powers-Up.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5'

  }
]
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
      dataSource: [
        {
          // Simplest usage.
          id: 0,
          url: 'https://cdn.vox-cdn.com/thumbor/nNsn33uQcSzEN8OzHU8_vCufjl4=/0x0:1800x1013/1820x1213/filters:focal(756x363:1044x651):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60154183/Webp.net_resizeimage__5_.0.jpg'

          // width: number
          // height: number
          // Optional, if you know the image size, you can set the optimization performance

          // You can pass props to <Image />.

        },
        {
          // Simplest usage.
          id: 1,
          url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2018/04/Featured-Super-Saiyan-Blue-Vegeta-Powers-Up.jpg?q=50&fit=crop&w=798&h=407&dpr=1.5'

          // width: number
          // height: number
          // Optional, if you know the image size, you can set the optimization performance

          // You can pass props to <Image />.

        }
      ],

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

    this.setState({
      position: this.state.position === this.state.dataSource.id ? 0 : this.state.position + 1
    });


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




        <Slideshow

          onPress={() => { this.handleOpenModal(this.state.dataSource.id) }}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />



        <View>
          <Modal visible={this.state.showModal} transparent={true} onRequestClose={this.handleCloseModal} onCancel={() => this.handleCloseModal}>
            <ImageViewer imageUrls={images} index={this.state.currentImageIndex} />
          </Modal>

              <ListItem itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelText}>Title Of Description</Text>
            </ListItem> 
            <ListItem itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelPara}>Title Of Description</Text>
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
