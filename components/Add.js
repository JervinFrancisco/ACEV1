import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Picker, Icon, Textarea } from 'native-base';
import Camera from 'react-native-camera';

export default class Add extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          selected2: null
        };
      }
      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }

      takePicture(){
          const options={

          }
          this.camera.capture({metadata:options}).then((data) => {
              console.log(data)
          }).catch((error)=>{
              console.log(error)
          })
      }

      render() {
        return (
          <Container>
            <Content>
              <Form>
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}         
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Front/Engine" value="key0" />
                    <Picker.Item label="Center/Cabin" value="key1" />
                    <Picker.Item label="Wheels/Undercarriage" value="key2" />
                    <Picker.Item label="Rear/Trunk" value="key3" />
                  </Picker>
                </Item>
                <Item regular>
                    <Input placeholder='Title' />
                </Item>
                <Textarea rowSpan={5} bordered placeholder="Description" />
                <Item regular>
                    <Input placeholder='Reference number (optional)' />
                </Item>
                <Camera
                 ref={(cam) =>{
                     this.camera = cam
                 }}
                 style={styles.view}
                 aspect={Camera.constants.aspect.fill}>
                 <Text 
                 style={styles.capture}
                 onPress={this.takePicture.bind(this)}>
                 [CAPTURE_IMAGE]
                 </Text>
                 </Camera>
              </Form>
            </Content>
          </Container>
          );
      }


}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#0D2847"
    },
    view: {
        flex: 1
    },
  
  })