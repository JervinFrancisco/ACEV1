import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Picker, Icon, Textarea, Button } from 'native-base';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity,Animated } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
//import Camera from 'react-native-camera';

const ref = React.createRef();
const front = React.createRef();
export default class Add extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          selected2: null
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

      onValueChange2(value: string) {
        this.setState({
          selected2: value
        });
      }
      cameraPressed(ev){
          console.log('camera')
      }


      render() {
        const { navigate } = this.props.navigation;
        return (
          <Container style={styles.container}>
            <Content>
              <Form>
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
                <Item regular style={styles.formItem}>
                    <Input placeholder='Title' placeholderTextColor='#FFF'/>
                </Item>

                <Textarea rowSpan={5} placeholder="Description" placeholderTextColor="#FFF" style={styles.formItem}/>

                <Item regular style={styles.formItem}>
                    <Input placeholder='Reference number (optional)' placeholderTextColor='#FFF'/>
                </Item>

              </Form>
                <Button iconLeft large block style={{backgroundColor: '#173553'}}>
                        <Icon name='camera' text='camera' onPress={this.cameraPressed.bind(this)}/>
                </Button>
                
                <TouchableOpacity   onPress={() => navigate('Result')}style ={styles.buttonSavedStyle}>
                    <Text style ={{color: "white",  fontWeight:"600",
                                    fontSize: 20,}}>Submit</Text>
                </TouchableOpacity>
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
  
  })