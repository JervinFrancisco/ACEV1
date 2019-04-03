import React from 'react';
import Search from './components/Search';
import Login from './components/Login';
import Result from './components/Result';
import Details from './components/Details';
import Camera from './components/CameraScreen';
import Add from './components/Add';
<<<<<<< HEAD
import About from './components/About';
=======
import Tutorial from './components/Tutorial';
import SideBar from './components/SideBar';

>>>>>>> 950d4cfbd75de8c9c1cfe77400740a4122564353
import { createStackNavigator, createAppContainer } from "react-navigation";

const App = createStackNavigator(
  {
    Search: Search,
    // Login: Login,
    Result: Result,
    Details: Details,
    Add: Add,
<<<<<<< HEAD
    About:About
=======
    Tutorial: Tutorial,
    SideBar: SideBar
>>>>>>> 950d4cfbd75de8c9c1cfe77400740a4122564353
  },
  {
    initialRouteName: "Tutorial" //temporarily - will/should be 'Login'
  }
);

export default createAppContainer(App);

