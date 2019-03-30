import React, { Component } from 'react';
//import Camera from 'react-native-camera';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity,Animated } from 'react-native';


export default class CameraScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {

        };
      }

      takePicture(){
        //   const options={

        //   }
        //   this.camera.capture({metadata:options}).then((data) => {
        //       console.log(data)
        //   }).catch((error)=>{
        //       console.log(error)
        //   })
      }

      render() {
        return (  
            <View>    
            {/* <Camera
                 ref={(cam) =>{
                     this.camera = cam
                 }}
                 style={styles.view}
                 aspect={Camera.constants.Aspect.fill}>
                 <Text 
                 style={styles.capture}
                 onPress={this.takePicture.bind(this)}>
                 [CAPTURE_IMAGE]
                 </Text>
            </Camera> */}
            </View>
          );
      }


}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
  
  })