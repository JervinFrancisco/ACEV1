import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export default class Bulletins extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
      }

      static navigationOptions = {
        headerTitle: "Bulletins",
      }


      render() {
          return (
      <Container style={styles.container}>
        <Content>
          <Card style={styles.cardContainer}>
            <CardItem style={styles.cards}>
              <Left>
                <Thumbnail square large source={require('../assets/drugs.jpeg')} />
                <Body>
                  <Text style={{color:"#FFF"}}>Hidden pocket in glove compartement</Text>
                  <Text style={{color:"#BBB"}} note>added 3 days ago</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cards}>
              <Left>
                <Thumbnail square large source={require('../assets/drugs.jpeg')} />
                <Body>
                  <Text style={{color:"#FFF"}}>Fake cupholder</Text>
                  <Text style={{color:"#BBB"}} note>added 6 days ago</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cards}>
              <Left>
                <Thumbnail square large source={require('../assets/drugs.jpeg')} />
                <Body>
                  <Text style={{color:"#FFF"}}>Shifter knob</Text>
                  <Text style={{color:"#BBB"}} note>added 6 days ago</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={styles.cards}>
              <Left>
                <Thumbnail square large source={require('../assets/drugs.jpeg')} />
                <Body>
                  <Text style={{color:"#FFF"}}>Twistable rearview mirror</Text>
                  <Text style={{color:"#BBB"}} note>added 1 week ago</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
          );
      }


}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D2847"
  },
  cards: {
    backgroundColor: "#375B79",
  },
  cardContainer: {
    backgroundColor: "#375B79",
  }
});