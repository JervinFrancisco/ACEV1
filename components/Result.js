import React from 'react';
//from 'react-native';
import Nav from './Nav';
import MethodList from './MethodList';
import { Ionicons } from '@expo/vector-icons';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { Container, Content, List, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ListItem, withTheme, Header } from 'react-native-elements'
import { FloatingAction } from 'react-native-floating-action';
import { Svg } from 'expo';

const { Circle, Rect, Path } = Svg;


const http = "http://192.168.1.60:3000/"                   
const ref = React.createRef();
const ref2 = React.createRef();
const ref3 = React.createRef();
const ref4 = React.createRef();
const front = React.createRef();
export default class Result extends React.Component {
  timer;
  constructor(props) {
    super(props);

    this.state = {
      tab: null,
      activePage: 2,
      hover: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      undercarriage:null,
      rear:null,
      front:null,
      center:null,
      showPlayerControls: false,
      initialPage: 0, 
      activeTab: undefined,
      data: null
    }

  }
  showPlayerControls = () => {
    // this.hideWithTimer();
    this.setState({ showPlayerControls: true, });
 
  }

  hidePlayerControls() {
    // clearTimeout(this.timer);
    this.setState({ showPlayerControls: false, });
  }

  // hideWithTimer() {
  //   this.timer = setTimeout(() => {
  //     this.hidePlayerControls()
  //   }, 4000)
  // }
  componentWillMount() {
    this.animatedValue = new Animated.Value(0)
 
    
  }


  componentDidMount() {
    
    // http://localhost:3000/concealments/5ca50af07c95490b99dab412
    let opts ={
      // body:JSON.stringify(formData),
      method: "GET",
          headers: { 
           'Accept': 'application/json',
           'Content-Type': 'application/x-www-form-urlencoded',
           'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTkwNGQ2NzE5MTE0MTIxYTAzMzBhZSIsImlhdCI6MTU1NDU4MzY4MSwiZXhwIjoxNTU0NjcwMDgxfQ.vMVHSy41Kag5Kr8loWfcHGxLhUewiH0J1SBpjk11S_I'
       }
  }
  const {navigate} = this.props.navigation
  const { navigation } = this.props
  const data = navigation.getParam('data', 'NO DATA')

  this.setState({data:data})
            fetch(`${http}concealments/${data[0].make}/${data[0].model}/${data[0].year}`,opts)
            .then(resp=>resp.json())
            .then(data=>{
           let rear=data[0].rear.concealment.length>0?data[0].rear.concealment:null
           let front=data[0].front.concealment.length>0?data[0].front.concealment:null
           let undercarriage=data[0].undercarriage.concealment.length>0?data[0].undercarriage.concealment:null
           let center=data[0].center.concealment.length>0?data[0].center.concealment:null
           console.log("this is all the data",data[0]);
           this.setState({
                data:data,
                undercarriage:undercarriage,
                front:front,
                rear:rear,
                center:center
              })
            })
            .catch(err=>console.log("Error", err.message))
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#0D2847',


    },

    headerLeft: (
      <TouchableOpacity
        style={{
          backgroundColor: 'transparent', flexDirection: 'row',
          alignSelf: 'flex-start', paddingLeft:30,paddingRight:18,padding:10,
     
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
        <TouchableOpacity
          style={{ backgroundColor: 'transparent' }}
          onPress={() => {
            var yo = ref2;
            yo.current.props.onPress()
          }}>

          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain'
            }}
            source={require('../assets/info.png')}
          />
        </TouchableOpacity>

      </View>
    ),

  }
  tabView(c) {
    this.setState(activePage)
  }
  toggle = () => {
    this.setState({ hover: !this.state.hover });
  };
  toggle2 = () => {
    this.setState({ hover2: !this.state.hover2 });
  };
  toggle3 = () => {
    this.setState({ hover3: !this.state.hover3 });
  };
  toggle4 = () => {
    this.setState({ hover4: !this.state.hover4 });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container >
        <Container  >
          <View style={styles.container2}>
            <Text style={{ color: 'white', fontSize: 25 }}>Mercedes Benz CLA250 2019</Text>
            {
              <Svg height="70%" width="70%" viewBox="0 0 1210.14 411.4">
                <Path
                  fill={this.state.hover ? 'white' : '#7A879B'}
                  onPress={() => { this.tabView.goToPage(3), this.setState({ activeTab: 3 })  }}
                  onPressIn={this.toggle}
                  onPressOut={this.toggle}
              
                  d="M1185.91,166.26c12.7-83.81,4.3-70.22-26-71.11-35.43-1.27-97.6-.85-97.6-.85l-53.85-27.24L986.81,212.63s70.12,7.7,73.81,100.09l0,.8c2.57,9.76,91,9.14,91.4-.8,9.29-8.7,30.32-8.75,34.71-16.93C1218.38,230.44,1185.91,166.26,1185.91,166.26Z"
                />
                <Path

                  fill={this.state.hover2 ? 'white' : '#7A879B'}
                  onPressIn={this.toggle2}
                  onPressOut={this.toggle2}
                  onPress={() => {this.tabView.goToPage(0), this.setState({ activeTab: 0})}}
                  d="M139.44,284.38c7-29.46,35.65-54.26,35.65-54.26,69.76-52.7,131.76,0,131.76,0h77.51L338.15,124.73a13.71,13.71,0,0,1-2,.7C-10,160.55,16.84,228.24,13.8,234.55c0,52.67,0,78.9,20.55,83.42s26.81,17.61,26.81,17.61h77.42A125,125,0,0,1,139.44,284.38Z" />

                <Path fill={this.state.hover3 ? 'white' : '#7A879B'}
                  onPressIn={this.toggle3}
                  onPressOut={this.toggle3}

                  onPress={() => {this.tabView.goToPage(2), this.setState({ activeTab: 2 })}}
                  d="M875.42,243.74H321.58s26.21,18.61,25.42,91.84H856.7C855.48,317.86,854.7,272.32,875.42,243.74Z" />
                <Path
                  onPress={() => {this.tabView.goToPage(1), this.setState({ activeTab: 1 })}}
                  fill={this.state.hover4 ? 'white' : '#7A879B'}
                  onPressIn={this.toggle4}
                  onPressOut={this.toggle4}
                  d="M990.35,57.9C904.85,6.26,794.79,9.81,794.79,9.81H583.24C504.22,17.12,446.52,59,446.52,59c-50.41,33.39-78.26,50-93.38,58.31l49,112.86H894.35c43.4-34.1,75.18-20.92,75.18-20.92l23.7-149.85ZM658.56,149.1c-85.19,6.93-243.45,8-243.45,8s-9.51-4.55-5.66-13.48c6.41-14.87,27.71-41.89,95.66-80.23,60.75-31.79,122.42-36.61,174.45-35C679,67.06,669.9,119.94,658.56,149.1Zm238.6-5.58c-58,7.68-130.89,7.65-204.52,4.54-6.81-34.18-1.78-86.55,7-113,2.53-10.43,103.92-6.95,139.11,2,40.64,14.38,54.89,53.77,66,100C904,139.45,899.55,142.83,897.16,143.52Z" />
                <Circle onPress={() => {this.tabView.goToPage(2), this.setState({ activeTab: 2 })}} fill={this.state.hover3 ? 'white' : '#7A879B'}
                  onPressIn={this.toggle3}
                  onPressOut={this.toggle3} cx="957.99" cy="310.67" r="87.57" />
                <Circle onPress={() => {this.tabView.goToPage(2), this.setState({ activeTab: 2 })}} fill={this.state.hover3 ? 'white' : '#7A879B'}
                  onPressIn={this.toggle3}
                  onPressOut={this.toggle3} cx="241.4" cy="310.41" r="87.57" />
              </Svg>
            }




          </View>

        </Container>


        <ScrollableTabView
          refreshControlStyle={{ backgroundColor: 'red' }}
          renderTabBar={() => <ScrollableTabBar onScroll={(yo)=>this.setState({ activeTab: this.state.activeTab = undefined})} onPress={(yo)=>console.log(yo)}/>}
          style={{ marginTop: -220, backgroundColor: "#0D2847" }}
          tabBarTextStyle={{ color: "white", fontSize: 27 }}
          tabBarUnderlineStyle={{ backgroundColor: "white" }}
          ref={(tabView) => { this.tabView = tabView; }}
          page={this.state.activeTab}
          initialPage={this.state.initialPage} 
        
        >

          <ScrollView tabLabel="Front/Engine"  >
            <View >
              <Container >

                <Content>
                  {this.state.showPlayerControls ? (
                    <Header
                      ref={ref3}
                      centerComponent={ { text: 'MY TITLE', style: { color: 'white' } }}
                      rightComponent={{ icon: 'close',  style: { color: '#FFFFFF'}, onPress: () => this.hidePlayerControls() }}
                      containerStyle={{
                        backgroundColor: 'grey',
                        justifyContent: 'center',
                        height: 80,


                      }}
                    />
                  ) : null}

  {  this.state.front &&
                   this.state.front.map(concealment=>(
                  <ListItem
                  key={concealment._id}
                  leftAvatar={{ rounded: false, source: {uri:`${http}${concealment.src[0]}` } }}
                  title={concealment.title}
                  onPress={() => navigate('Details',{data:concealment})}
                  />
                ), )
              
              }

                 { !this.state.front &&
              <Text style={{fontSize:50, color:"red"}}>No Concealment Methods for Front/Engine</Text>
            } 

                </Content>
              </Container>
            </View>

          </ScrollView>

          <ScrollView onScroll={()=>this.setState({ activeTab: 1})}   tabLabel="Center/Cabin" >
            <View>
            <Container >

<Content>
              {this.state.showPlayerControls ? (
                <Header
                  ref={ref3}
                  centerComponent={{ text: 'MY TITLE', style: { color: 'white' } }}
                  rightComponent={{ icon: 'close',  style: { color: '#FFFFFF'}, onPress: () => this.hidePlayerControls() }}
                  containerStyle={{
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    height: 80,


                  }}
                />
              ) : null}
                   {  this.state.center &&
              this.state.center.map(concealment=>(
                
               <ListItem
               key={concealment._id}
               leftAvatar={{ rounded: false, source: {uri:`${http}${concealment.src[0]}` } }}
               title={concealment.title}
               onPress={() => navigate('Details',{data:concealment})}
                  />
                ), )
              
              }

               { !this.state.center &&
              <Text style={{fontSize:50, color:"red"}}>No Concealment Methods for Center/Cabin</Text>
            } 
                  </Content>
            </Container >


            </View>
          </ScrollView>

          <ScrollView  page={this.state.activeTab}   tabLabel='Undercarriage/Wheels'>
            <View>
            <Container >

<Content>
              {this.state.showPlayerControls ? (
                <Header
                  ref={ref3}
                  centerComponent={{ text: 'MY TITLE', style: { color: 'white' } }}
                  rightComponent={{ icon: 'close',  style: { color: '#FFFFFF'}, onPress: () => this.hidePlayerControls() }}
                  containerStyle={{
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    height: 80,
                  }}
                />
              ) : null}
              {  this.state.undercarriage &&
              this.state.undercarriage.map(concealment=>(
                  <ListItem
                    key={concealment._id}
                    leftAvatar={{ rounded: false, source:{uri:`${http}${concealment.src[0]}`  }}}
                    title={concealment.title}
                    onPress={() => navigate('Details', {data:concealment})}
                  />
              ), )
              
              }
              { !this.state.undercarriage &&
              <Text>No Concealment Method For Undercarriage</Text>
            } 
                           </Content>
            </Container >
            </View>
          </ScrollView>
          <ScrollView page={this.state.activeTab}  tabLabel="Rear/Trunk" >
            <View>
            <Container >

<Content>
              {this.state.showPlayerControls ? (
                <Header
                  ref={ref3}
                  centerComponent={{ text: 'MY TITLE', style: { color: 'white' } }}
                  rightComponent={{ icon: 'close',  style: { color: '#FFFFFF'}, onPress: () => this.hidePlayerControls() }}
                  containerStyle={{
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    height: 80,
                  }}
                >
                </Header>
              ) : null}
                {  this.state.rear &&
                   this.state.rear.map(concealment=>(
             <ListItem
          
                    key={concealment._id}
                    leftAvatar={{ rounded: false, source: {uri:`${http}${concealment.src[0]}` } }}
                    title={concealment.title}
                    onPress={() => navigate('Details',{data:concealment})}
                  />
             ),)
                }

                { !this.state.rear &&
              <Text style={{fontSize:50, color:"red"}}>No Concealment Method For Rear/Trunk</Text>
            } 
                  </Content>
                             </Container >


            </View>
          </ScrollView>
          <ScrollView overScrollMode={'never'} style={{display:"none"}} >

          </ScrollView>
        </ScrollableTabView>

        <Container style={{ display: "none" }}>
          <Button onPress={() => { navigate('Search') }} ref={ref} title="Press Me" >

          </Button>
        </Container>

        <Container style={{ display: "none" }}>
          <Button onPress={() => { this.showPlayerControls() }} ref={ref2} title="Press Me" >

          </Button>
        </Container>

        <Container style={{ display: "none" }}>
          <Button onPress={() => { this.showPlayerControls() }} ref={ref3} title="Press Me" >

          </Button>
        </Container>

        <FloatingAction

          onPressMain={(yo) => {

            { navigate('Add',{data:this.state.data}) }

          }}
          showBackground={false}
          onStateChange={(yo) => {yo.isActive? this.setState({isActive:false}): this.setState({isActive:false})}}
          floatingIcon = { <Image style={{width: 30, height: 30}} source={require('../assets/add.png')}/>}

        />
      </Container>
    )
  }


  // render() {
  //     return (

  //         <View>
  //         {/* <ImageMapper src="../assets/car-icon.png" map={MAP}
  //           onClick={area => this.areaClicked(area)}  
  //         //   //onImageClick optional             */}

  //              </View>

  //     );
  // }


}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D2847"
  },
  container2: {
    backgroundColor: "#0D2847",
    maxWidth: "auto",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  listLabelText: {
    fontWeight: "600",
    fontSize: 15,
    color: "grey"
  },

  itemPicker: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1,
    backgroundColor: "#183553",
    textAlign: "center",
  },

  buttonSavedStyle: {

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

  buttonHidden: {
    display: "none"
  },

})