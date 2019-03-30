import React, { Component } from 'react';
import { Modal, TouchableHighlight, View, TouchableOpacity,Text, Image, TouchableWithoutFeedback, StyleSheet} from 'react-native';       
import ImageViewer from 'react-native-image-zoom-viewer';
import { Container } from 'native-base';


export default class Details extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isModalOpened: false,  //Controls if modal is opened or closed
            currentImageIndex: 0,
            showModal: false   

        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      openModal(index) {
        this.setState({showModal: true, currentImageIndex: index })
     }
     
     handleOpenModal(index) {
        this.setState({ showModal: true, currentImageIndex: index });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

      render() {
        const images = [{
            // Simplest usage.
            id: 1,
            source: require('../assets/drugs.jpeg'),
         
            // width: number
            // height: number
            // Optional, if you know the image size, you can set the optimization performance
         
            // You can pass props to <Image />.
 
        }]
     
            return (
                <Container>
                   {images.map(index =>( 
               <View key= { }>
             
   <TouchableWithoutFeedback onPress={() => {this.handleOpenModal(index)}}>
     <Image
       resizeMode="cover"
       style={styles.image}
       source={require('../assets/drugs.jpeg')}
     />
   </TouchableWithoutFeedback>

</View>
   ))}
<View>
                    <Modal visible={this.state.showModal} transparent={true}  onRequestClose={this.handleCloseModal} onCancel={()=>this.handleCloseModal}>
                    <ImageViewer imageUrls={images}  index={this.state.currentImageIndex}/>
                </Modal>
                </View>   
                </Container>
            )
          
      }


}
const styles = StyleSheet.create({
image:{
    width: 100
}
  })