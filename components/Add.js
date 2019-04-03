import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Picker, Icon, Textarea, Button, ListItem, Label } from 'native-base';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity,Animated,  Keyboard, KeyboardAvoidingView  } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
//import Camera from 'react-native-camera';

const ref = React.createRef();
const front = React.createRef();
const options = {
    title: 'Choose Image',
    takePhotoButtonTitle: 'Take Photo',
    chooseFromLibraryButtonTitle: 'Choose From Gallery'
  };

export default class Add extends Component {

    
    
    constructor(props) {
        super(props);
        this.state = {
          selected2: null,
          imageSource: null
        };
      }

      static navigationOptions = {
        headerStyle: {
          backgroundColor: '#0D2847',
          
    
        },
        headerTitle: "Add a concealment method",
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
        headerRight: (
          <View style={{
            flexDirection: 'row',
            alignSelf: 'flex-start', paddingTop: 12, marginRight: 10
          }}>
    
          </View>
        ),
    
      }

      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
      cameraPressed(ev){
          console.log('camera')
          
            ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                imageSource: source,
              });
            }
          });
      }


      render() {
        const { navigate } = this.props.navigation;
        return (
          <KeyboardAwareScrollView
          style={{ backgroundColor: '#4c69a5' }}
          resetScrollToCoords={{ x: 0, y: 100 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
          extraScrollHeight ={1000}
        >
          <Container style={styles.container}>
            <Content>
              <Form>
              <ListItem itemDivider style ={styles.listLabel}>
              <Text style ={styles.listLabelText}>Car Area</Text>
            </ListItem> 
                <Item picker style={styles.formItem}>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" style={{color: "#FFF"}} />}
                    style={{ width: undefined, color: '#FFF'}}         
                    placeholderStyle={{ color: "#FFF" }}
                    placeholderIconColor="#FFF"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Picker.Item label="Front/Engine" value="key0" />
                    <Picker.Item label="Center/Cabin" value="key1" />
                    <Picker.Item label="Wheels/Undercarriage" value="key2" />
                    <Picker.Item label="Rear/Trunk" value="key3" />
                  </Picker>
                </Item>
                <Item floatingLabel>
                  <Label style={styles.listLabelText}>Title</Label>
                  <Input style={styles.inputFields}/>
                </Item>
                <Item floatingLabel>
                  <Label style={styles.listLabelText}>Description</Label>
                  <Input style={styles.inputFields}/>
                </Item>
                <Item floatingLabel>
                  <Label style={styles.listLabelText}>Employee Number</Label>
                  <Input style={styles.inputFields}/>
                </Item>
                <Item floatingLabel last>
                  <Label style={styles.listLabelText}>Reference Number (optional)</Label>
                  <Input style={styles.inputFields}/>
                </Item>

              </Form>
                <Button iconLeft large block style={{backgroundColor: '#173553', marginTop: 10}} onPress={this.cameraPressed.bind(this)} >
                        <Icon name='camera' text='camera'/>
                </Button>
                <Image source={this.state.imageSource}></Image>
                
                <TouchableOpacity   onPress={() => navigate('Result')}style ={styles.buttonSavedStyle}>
                    <Text style ={{color: "white",  fontWeight:"600",
                                    fontSize: 20,}}>Submit</Text>
                </TouchableOpacity>
                <Container style={{ display: "none" }}>
          <Button onPress={() => { navigate('Result') }} ref={ref} title="Press Me" >

          </Button>
        </Container>
            </Content>
          </Container>
          </KeyboardAwareScrollView>
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
      formItem:
      {
          backgroundColor: '#375B79', 
          color: '#FFF', 
          borderColor: '#375B79',
          borderBottomColor: '#0D2847',
          marginTop: 5
      },
      listLabel: {
        marginTop: 1,
        backgroundColor: 'transparent',
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        
        },
        
        listLabelText:{
          fontWeight:"600",
          fontSize: 15,
          color: "#FFF"
        },
        inputFields:{
          color: "#FFF"
        },
  })