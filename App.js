import React from 'react';
import Search from './components/Search';
import Login from './components/Login';
import Result from './components/Result';
import Details from './components/Details';
import Camera from './components/CameraScreen';
import Add from './components/Add';
import About from './components/About';
import Tutorial from './components/Tutorial';
import SideBar from './components/SideBar';
import Bulletins from './components/Bulletins';
import TestingComponent from './components/TestingComponent'

import { createStackNavigator, createAppContainer } from "react-navigation";

const App = createStackNavigator(
  {
    Search: Search,
    // Login: Login,
    Result: Result,
    Details: Details,
    Add: Add,
    About:About,
    Tutorial: Tutorial,
    SideBar: SideBar,
    Bulletins:Bulletins,
    TestingComponent:TestingComponent
  },
  {
    initialRouteName: "Search" //temporarily - will/should be 'Login'
  }
);

export default createAppContainer(App);

