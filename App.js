import React from 'react';
import Search from './components/Search';
import Login from './components/Login';
import Result from './components/Result';
import Details from './components/Details';
import { createStackNavigator, createAppContainer } from "react-navigation";

const App = createStackNavigator(
  {
    Search: Search,
    // Login: Login,
    Result: Result,
    Details: Details
  },
  {
    initialRouteName: "Details" //temporarily - will/should be 'Login'
  }
);

export default createAppContainer(App);

