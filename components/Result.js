import React from 'react';
//from 'react-native';
import Nav from './Nav';
import MethodList from './MethodList';
import { Ionicons } from '@expo/vector-icons';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Animated, ActivityIndicator,TouchableWithoutFeedback } from 'react-native';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { Container, Content, List, Icon, Left, Body, Right, Switch, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ListItem, withTheme, Header } from 'react-native-elements'
import { FloatingAction } from 'react-native-floating-action';
import { Svg, LinearGradient } from 'expo';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
var s = require('./styles')

const { Circle, Rect, Path } = Svg;


const http = "http://10.70.159.94:3000/"
const ref = React.createRef();
const ref2 = React.createRef();
const ref3 = React.createRef();
const ref4 = React.createRef();
const front = React.createRef();
var backToggle = false;
var frontToggle = true;
var centerToggle = false;
var underToggle = false;
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
      undercarriage: null,
      rear: null,
      front: null,
      center: null,
      showPlayerControls: false,
      initialPage: 0,
      activeTab: undefined,
      data: null,
      isLoading: true,
      make: null,
      model: null,
      year: null,
      selectedColor:'#FFF',
      notSelectedColor:'#7A879B',
      frontSelected: true,
      undercarriageSelected: false,
      rearSelected: false,
      centerSelected: false,
      refresh: false,
      methodHave:false,
      makeTitle: null,
      modelTitle: null,
      yearTitle: null

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
    console.log("HEYYYYYYDEEYRER")
    // this.componentDidMount()
    // this.forceUpdate()
  }
 
  handleOnNavigateBack = () => {
    const { navigate } = this.props.navigation;
    // console.log("AM I EVEN GETTING HERE?")
    navigate('Result')
    // this.setState({
    //   refresh:!this.state.refresh
    // })
    console.log("am i getting here")
    this.fetchandrefetch(this.state.data)
    
  }

  componentDidMount() {
  
    // http://localhost:3000/concealments/5ca50af07c95490b99dab412
 
    const { navigate } = this.props.navigation
    const { navigation } = this.props
    const data = navigation.getParam('data', 'NO DATA')
    const make = navigation.getParam('make', 'NO DATA')
    const model = navigation.getParam('model', 'NO DATA')
    const year = navigation.getParam('year', 'NO DATA')
    this.setState({makeTitle:make, modelTitle:model, yearTitle:year})
    console.log
    // let addNewData=navigation.getParam('addNewData', 'NO DATA')
    // addNewData();
    this.fetchandrefetch(data)
    console.log("HEYYYY", data)
    this.setState({ make: data[0].make, model: data[0].model, year: data[0].year })

    this.setState({ data: data,
      methodHave:false, })
    
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 1500
    }).start();


  }
  fetchandrefetch=(data)=>{
    let opts = {
      // body:JSON.stringify(formData),
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYWY4OTE5NjJhNDRmMDUzZTg4MmNlZSIsImlhdCI6MTU1NTAwNzgwMCwiZXhwIjoxNTU1MDk0MjAwfQ.IpBNZOpaIeJX2ZZtrUOwkefz47WpYVOEcUmFsmQWWxs"
      }
    }
    fetch(`${http}concealments/${data[0].make}/${data[0].model}/${data[0].year}`, opts)
      .then(resp => resp.json())
      .then(data => {
        let rear = data[0].rear.concealment.length > 0 ? data[0].rear.concealment : null
        let front = data[0].front.concealment.length > 0 ? data[0].front.concealment : null
        let undercarriage = data[0].undercarriage.concealment.length > 0 ? data[0].undercarriage.concealment : null
        let center = data[0].center.concealment.length > 0 ? data[0].center.concealment : null
        console.log("this is all the data", data[0]._id);
        this.setState({
          
          data: data,
          undercarriage: undercarriage,
          front: front,
          rear: rear,
          center: center,
          isLoading: false
        })
      })
      .catch(err => console.log("Error", err.message))

  }

  shouldComponentUpdate(){
    console.log("SHOULD THE COMPONENT UPDATE?!")
    return true;
  }

  componentDidUpdate(){
    console.log("CONSOLE DID UPDAAAAAAAATE");
  }

  componentWillUpdate(){
    console.log("CONSOLE WIIIIILLLL UPDAAAAAATE");
    
  }


  static navigationOptions = {
    headerStyle : {
      backgroundColor: "#05162E",
      elevation: 0
    },

    headerRight: (
        <TouchableOpacity
          style={s.menuButton}
          onPress={() => {
            var yo = ref2;
            yo.current.props.onPress()
          }}>
          <Ionicons name="md-information-circle" size={24} color="white"></Ionicons>
        </TouchableOpacity>
    ),

  }
  tabView(c) {
    this.setState(activePage)
  }
  

  logger = () => {
    console.log("HOOOORAY HOOOOORAY WOOP WWOOOOOOP");
  }
  rearToggled = () =>{
    console.log("rear pressed")
    this.tabView.goToPage(3)
    this.bToggle()
    this.setState({activeTab : 3})
    console.log(this.tabView.state.currentPage)

  };
  frontToggled = () =>{
    console.log("front pressed")
    this.tabView.goToPage(0)
    this.fToggle()
    this.setState({activeTab : 0})
    console.log(this.tabView.state.currentPage)
  };
  centerToggled = () =>{
    console.log("center pressed")
    this.tabView.goToPage(1)
    this.cToggle()
    this.setState({activeTab : 1})
    console.log(this.tabView.state.currentPage)
  };
  underToggled = () =>{
    console.log("under pressed")
    this.tabView.goToPage(2)
    this.uToggle()
    this.setState({activeTab : 2})
    console.log(this.tabView.state.currentPage)
  };
  fToggle = () =>{
    console.log("fTogg")
    frontToggle = true;
    backToggle = false;
    centerToggle = false;
    underToggle = false;
    this.setState({refresh : !this.state.refresh});
  }
  bToggle = () =>{
    console.log("bTogg")
    frontToggle = false;
    backToggle = true;
    centerToggle = false;
    underToggle = false; 
    this.setState({refresh : !this.state.refresh});
  }
  cToggle = () =>{
    console.log("cTogg")
    frontToggle = false;
    backToggle = false;
    centerToggle = true;
    underToggle = false;
    this.setState({refresh : !this.state.refresh});
  }
  uToggle = () =>{
    console.log("uTogg")
    frontToggle = false;
    backToggle = false;
    centerToggle = false;
    underToggle = true;
    this.setState({refresh : !this.state.refresh});
  }
  onScrollTab = () =>{
    this.setState({ activeTab: this.state.activeTab = undefined });
    // console.log(this.tabView.state.currentPage);
    // switch(this.tabView.state.currentPage){
    //   case 0:
    //   console.log("front");
    //   console.log(this.state.activePage);
    //   console.log(this.state.activeTab);
    //   this.fToggle()
      
    //   return;
    //   case 1:
    //   console.log("center");
    //   this.cToggle()

    //   return;
    //   case 2:
    //   console.log("under");
    //   this.uToggle()

    //   return;
    //   case 3:
    //   console.log("rear");
    //   this.bToggle()
    //   return;
    //   default:
    //   break;
    //}
  }
  onTabChanged = (i, ref) =>{
    console.log("FROM:",i.from);
    console.log("To",i.i);
    console.log(ref);

    switch(i.i){
      case 0:
      console.log("front");
      console.log(this.state.activePage);
      console.log(this.state.activeTab);
      this.fToggle()
      
      return;
      case 1:
      console.log("center");
      this.cToggle()

      return;
      case 2:
      console.log("under");
      this.uToggle()

      return;
      case 3:
      console.log("rear");
      this.bToggle()
      return;
      default:
      break;
    }


  }
 refetch=()=>{
   this.setState({methodHave:false});
  let opts = {
    // body:JSON.stringify(formData),
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYTkwNGQ2NzE5MTE0MTIxYTAzMzBhZSIsImlhdCI6MTU1NDkyMjc2MCwiZXhwIjoxNTU1MDA5MTYwfQ.9u7ArBsPIu0SbWMVqD4EvmQgOE16UBgMaID1lTHqDfM'
    }
  }
  fetch(`${http}concealments/${this.state.make}/${this.state.model}/${this.state.year}`, opts)
  .then(resp => resp.json())
  .then(data => {
    let rear = data[0].rear.concealment.length > 0 ? data[0].rear.concealment : null
    let front = data[0].front.concealment.length > 0 ? data[0].front.concealment : null
    let undercarriage = data[0].undercarriage.concealment.length > 0 ? data[0].undercarriage.concealment : null
    let center = data[0].center.concealment.length > 0 ? data[0].center.concealment : null
    console.log("this is all the data", data[0]._id);
    this.setState({
      
      data: data,
      undercarriage: undercarriage,
      front: front,
      rear: rear,
      center: center,
      isLoading: false
    })
  })
 }

  render() {
    if(this.state.methodHave) {this.refetch()
    }
      const { navigate } = this.props.navigation;

    return (
      <Container>
          <View style={styles.container}>
                <LinearGradient colors={['#05162E', '#0D2847']} style={{height:200}}>
                <View style={styles.innerContainer}>
                  <Text style={styles.titleText}>{this.state.makeTitle} {this.state.modelTitle} {this.state.yearTitle}</Text>
                  {/*<Text style={styles.titleText}>Mitsubushi Mitsubushi 2009</Text>*}
            
               {/*back*/}
              <Svg height="70%" width="70%" viewBox="0 0 1210.14 411.4">
                {backToggle &&
                <Path
                  
                 
                  // fill={this.state.activeTab === 3 ? this.state.selectedColor : this.state.notSelectedColor }
                  fill={this.state.selectedColor}
                  onPress={this.rearToggled}
                  // onPressIn={this.toggle}
                  // onPressOut={this.toggle}

                  d="M1185.91,166.26c12.7-83.81,4.3-70.22-26-71.11-35.43-1.27-97.6-.85-97.6-.85l-53.85-27.24L986.81,212.63s70.12,7.7,73.81,100.09l0,.8c2.57,9.76,91,9.14,91.4-.8,9.29-8.7,30.32-8.75,34.71-16.93C1218.38,230.44,1185.91,166.26,1185.91,166.26Z"
                />
                }
                {!backToggle &&
                <Path
                
                
                fill={this.state.notSelectedColor}
                onPress={this.rearToggled}
                // onPressIn={this.toggle}
                // onPressOut={this.toggle}

                d="M1185.91,166.26c12.7-83.81,4.3-70.22-26-71.11-35.43-1.27-97.6-.85-97.6-.85l-53.85-27.24L986.81,212.63s70.12,7.7,73.81,100.09l0,.8c2.57,9.76,91,9.14,91.4-.8,9.29-8.7,30.32-8.75,34.71-16.93C1218.38,230.44,1185.91,166.26,1185.91,166.26Z"
              />                
                }
                
                {/* front  */}
                {frontToggle && <Path

                  
                  fill={this.state.selectedColor}
                  
                  onPress={this.frontToggled}
                  d="M139.44,284.38c7-29.46,35.65-54.26,35.65-54.26,69.76-52.7,131.76,0,131.76,0h77.51L338.15,124.73a13.71,13.71,0,0,1-2,.7C-10,160.55,16.84,228.24,13.8,234.55c0,52.67,0,78.9,20.55,83.42s26.81,17.61,26.81,17.61h77.42A125,125,0,0,1,139.44,284.38Z" />
                }

                {!frontToggle && <Path

                  
                  fill={this.state.notSelectedColor}
                  
                  onPress={this.frontToggled}
                  d="M139.44,284.38c7-29.46,35.65-54.26,35.65-54.26,69.76-52.7,131.76,0,131.76,0h77.51L338.15,124.73a13.71,13.71,0,0,1-2,.7C-10,160.55,16.84,228.24,13.8,234.55c0,52.67,0,78.9,20.55,83.42s26.81,17.61,26.81,17.61h77.42A125,125,0,0,1,139.44,284.38Z" />
                }

                {/*undercarriage*/}
                {underToggle && <Path 

                  fill={this.state.selectedColor}
                  onPress={this.underToggled}
                  d="M875.42,243.74H321.58s26.21,18.61,25.42,91.84H856.7C855.48,317.86,854.7,272.32,875.42,243.74Z" />
                }
                {!underToggle && <Path 
                  
                  fill={this.state.notSelectedColor}
                  onPress={this.underToggled}
                  d="M875.42,243.74H321.58s26.21,18.61,25.42,91.84H856.7C855.48,317.86,854.7,272.32,875.42,243.74Z" />
                }
                
                {/*Center*/}
                {centerToggle && <Path
                  onPress={this.centerToggled}
                  fill={this.state.selectedColor}
                  d="M990.35,57.9C904.85,6.26,794.79,9.81,794.79,9.81H583.24C504.22,17.12,446.52,59,446.52,59c-50.41,33.39-78.26,50-93.38,58.31l49,112.86H894.35c43.4-34.1,75.18-20.92,75.18-20.92l23.7-149.85ZM658.56,149.1c-85.19,6.93-243.45,8-243.45,8s-9.51-4.55-5.66-13.48c6.41-14.87,27.71-41.89,95.66-80.23,60.75-31.79,122.42-36.61,174.45-35C679,67.06,669.9,119.94,658.56,149.1Zm238.6-5.58c-58,7.68-130.89,7.65-204.52,4.54-6.81-34.18-1.78-86.55,7-113,2.53-10.43,103.92-6.95,139.11,2,40.64,14.38,54.89,53.77,66,100C904,139.45,899.55,142.83,897.16,143.52Z" />}

                  {!centerToggle && <Path
                  onPress={this.centerToggled}
                  fill={this.state.notSelectedColor}
                  d="M990.35,57.9C904.85,6.26,794.79,9.81,794.79,9.81H583.24C504.22,17.12,446.52,59,446.52,59c-50.41,33.39-78.26,50-93.38,58.31l49,112.86H894.35c43.4-34.1,75.18-20.92,75.18-20.92l23.7-149.85ZM658.56,149.1c-85.19,6.93-243.45,8-243.45,8s-9.51-4.55-5.66-13.48c6.41-14.87,27.71-41.89,95.66-80.23,60.75-31.79,122.42-36.61,174.45-35C679,67.06,669.9,119.94,658.56,149.1Zm238.6-5.58c-58,7.68-130.89,7.65-204.52,4.54-6.81-34.18-1.78-86.55,7-113,2.53-10.43,103.92-6.95,139.11,2,40.64,14.38,54.89,53.77,66,100C904,139.45,899.55,142.83,897.16,143.52Z" />}
                
                {/*Wheels*/}
                {underToggle &&
                  <Circle 
                  fill={this.state.selectedColor}
                  onPress={this.underToggled} cx="957.99" cy="310.67" r="87.57" />
                }
                {underToggle &&
                  <Circle 
                  fill={this.state.selectedColor}
                  onPress={this.underToggled} cx="241.4" cy="310.41" r="87.57" />
                }
                
                {!underToggle &&
                  <Circle 
                  fill={this.state.notSelectedColor}
                  onPress={this.underToggled} cx="957.99" cy="310.67" r="87.57" />
                }
                {!underToggle &&
                  <Circle 
                  fill={this.state.notSelectedColor}
                  onPress={this.underToggled} cx="241.4" cy="310.41" r="87.57" />
                }
              </Svg>
                    </View>
                    </LinearGradient>
          </View>
{/*}
        {this.state.isLoading &&
         <View style={{
            flex: 1,
            width: '100%',
            height: 50,
            backgroundColor: '#0D2847',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: -200,
            elevation: 0
          }}>
            <ActivityIndicator size="large" color='#C41200' />
          </View>
        }
*/}
        {this.state.isLoading = true &&
          <ScrollableTabView
          onChangeTab={this.onTabChanged.bind(this)}
            refreshControlStyle={{}}
            renderTabBar={() => <ScrollableTabBar onScroll={this.onScrollTab} onPress={(yo) => console.log(yo)} />}
            style={{ backgroundColor: "#0D2847" }}
            tabBarTextStyle={{ color: "white", textAlign:"center", fontSize: 18}}
            tabBarUnderlineStyle={{ backgroundColor: "white" }}
            ref={(tabView) => { this.tabView = tabView; }}
            page={this.state.activeTab}
            initialPage={this.state.initialPage}>
            
            <ScrollView tabLabel={"Front/Engine"}>
              <View>
                <Container>
                  <Content>
                    {this.state.showPlayerControls ? (
                      <Header
                        ref={ref3}
                        centerComponent={{ text: 'Includes: Engine, Grill, Headlights, Bumpers', style: { color: 'white', width: 265, fontWeight: "bold", marginBottom: 20,   } }}
                        rightComponent={<Ionicons name="md-close-circle" size={20} color="white" style={{ marginBottom: 20, padding: 15 }} onPress={() => this.hidePlayerControls()} />}
                        containerStyle={{
                          backgroundColor: 'black',
                          justifyContent: 'center',
                          height: 70,
                          top: 0,
                        }}
                      />
                    ) : null}

                    {this.state.front &&
                      this.state.front.map(concealment => (
                        <ListItem
                          key={concealment._id}
                          leftAvatar={{ rounded: false, source: { uri: `${http}${concealment.src[0]}` } }}
                          title={concealment.title}
                          onPress={() => navigate('Details', { data: concealment })}
                        />
                      ), )

                    }

                    {!this.state.front &&
                      <Text style={styles.noConcealment}>No concealment methods</Text>
                    }

                  </Content>
                </Container>
              </View>
          
            </ScrollView>
        
            <ScrollView tabLabel={"Center/Cabin"} >
              <View>
                <Container>

                  <Content>
                    {this.state.showPlayerControls ? (
                      <Header
                        ref={ref3}
                        centerComponent={{ text: 'Includes: Seats, Doors, Mirrors', style: { color: 'white', fontWeight: "bold", marginBottom: 20 } }}
                        rightComponent={<Ionicons name="md-close-circle" size={20} color="white" style={{ marginBottom: 20, padding: 15 }} onPress={() => this.hidePlayerControls()} />}
                        containerStyle={{
                          backgroundColor: 'black',
                          justifyContent: 'center',
                          height: 70,


                        }}
                      />
                    ) : null}
                    {this.state.center &&
                      this.state.center.map(concealment => (

                        <ListItem
                          key={concealment._id}
                          leftAvatar={{ rounded: false, source: { uri: `${http}${concealment.src[0]}` } }}
                          title={concealment.title}
                          onPress={() => navigate('Details', { data: concealment })}
                        />
                      ), )

                    }

                    {!this.state.center &&
                      <Text style={styles.noConcealment}>No concealment methods</Text>
                    }
                  </Content>
                </Container >


              </View>
            </ScrollView>

            <ScrollView tabLabel={"Undercarriage/Wheels"}>
              <View>
                <Container >
                  <Content>
                    {this.state.showPlayerControls ? (
                      <Header
                        ref={ref3}
                        centerComponent={{ text: 'Includes: Wheels, Frame', style: { color: 'white', fontWeight: "bold", marginBottom: 20 } }}
                        rightComponent={<Ionicons name="md-close-circle" size={20} color="white" style={{ marginBottom: 20, padding: 15 }} onPress={() => this.hidePlayerControls()} />}
                        containerStyle={{
                          backgroundColor: 'black',
                          justifyContent: 'center',
                          height: 70,
                        }}
                      />
                    ) : null}
                    {this.state.undercarriage &&
                      this.state.undercarriage.map(concealment => (
                        <ListItem
                          key={concealment._id}
                          leftAvatar={{ rounded: false, source: { uri: `${http}${concealment.src[0]}` } }}
                          title={concealment.title}
                          onPress={() => navigate('Details', { data: concealment })}
                        />
                      ), )

                    }
                    {!this.state.undercarriage &&
                      <Text style={styles.noConcealment}>No concealment methods</Text>
                    }
                  </Content>
                </Container >
              </View>
            </ScrollView>

            <ScrollView  tabLabel={"Rear/Trunk"} >
              <View>
                <Container >

                  <Content>
                    {this.state.showPlayerControls ? (
                      <Header
                        ref={ref3}
                        centerComponent={{ text: 'Includes: Trunk, Taillights, Mirrors', style: { color: 'white', fontWeight: "bold", marginBottom: 20 } }}
                        rightComponent={<Ionicons name="md-close-circle" size={20} color="white" style={{ marginBottom: 20, padding: 15 }} onPress={() => this.hidePlayerControls()} />}
                        containerStyle={{
                          backgroundColor: 'black',
                          justifyContent: 'center',
                          height: 70,
                        }}
                      >
                      </Header>
                    ) : null}
                    {this.state.rear &&
                      this.state.rear.map(concealment => (
                        <ListItem

                          key={concealment._id}
                          leftAvatar={{ rounded: false, source: { uri: `${http}${concealment.src[0]}` } }}
                          title={concealment.title}
                          onPress={() => navigate('Details', { data: concealment })}
                        />
                      ), )
                    }

                    {!this.state.rear &&
                      <Text style={styles.noConcealment}>No concealment methods</Text>
                    }

                  </Content>
                </Container >


              </View>
            </ScrollView>
          
          </ScrollableTabView>
        }
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
          color={"#4AA7D1"}
          onPressMain={(yo) => {
            this.setState({ methodHave :true})
          navigate('Add', {data:this.state.data,
                          onNavigateBack: this.handleOnNavigateBack})
          }}
          showBackground={false}
          onStateChange={(yo) => { yo.isActive ? this.setState({ isActive: false }) : this.setState({ isActive: false }) }}
          floatingIcon={<Image style={{ width: 30, height: 30 }} source={require('../assets/add.png')} />}

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

  innerContainer: {
    //maxWidth: "auto",
    height: 200,
    flex: 1,
    flexDirection: "column",
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

  noConcealment: {
    color: "#000",
    textAlign: "center",
    marginTop:50
  },

  titleText: {
    fontSize: 24,
    textAlign: "center",
    color:"#fff"
  }

})