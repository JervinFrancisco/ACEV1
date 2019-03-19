import React from 'react';
//from 'react-native';
import Nav from './Nav';
import MethodList from './MethodList';
import ImageMapper from 'react-image-mapper';

export default class Result extends React.Component {
  
  MAP = {
    name: "car-map",
    areas: [
      { name: "front", shape: "poly", coords: [0,53,2,70,10,76,28,75,30,63,36,53,45,47,53,45,65,47,69,51,86,51,76,27,42,31,6,43]},
      { name: "under", shape: "poly", coords: [47,50,38,58,33,68,34,78,39,85,48,90,58,91,65,87,70,83,73,77,203,76,208,85,217,90,227,90,235,87,241,81,243,67,238,56,226,50,213,53,210,55,75,55,67,54,58,51]},
      { name: "center", shape: "poly", coords: [207,51,92,51,80,25,98,13,124,2,205,2,231,12,226,46]},
      { name: "rear", shape: "poly", coords: [276,21,249,20,235,13,229,46,240,53,247,63,247,72,268,72,275,69,280,56,277,25,276,21]},
    ]
  } 
  
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
      }

      areaClicked(area) {
        //area.name if statements
        console.log("hey");
      }

      render() {
          return (
            <React.Fragment>
              <ImageMapper src="./assets/car-icon.png" map={MAP}
                onClick={area => this.areaClicked(area)}  
                //onImageClick optional            
              />
            </React.Fragment>
          );
      }


}