import React from 'react';
//from 'react-native';
import Nav from './Nav';
import MethodList from './MethodList';

export default class Result extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
      }

      render() {
          return (
            <React.Fragment>
            <Nav/>
            {this.state.isLoading &&
            <Text>Loading</Text>
            }
            {this.state.voice == false &&
            //Car graphic
            <MethodList/>
            }
            </React.Fragment>
          );
      }


}