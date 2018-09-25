/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default Workshop4 = () => {
  return(
    <View style={{flex: 1, flexDirection:'row'}}>
      <View style={{flex: 1, backgroundColor: '#FF0000'}}></View>
      <View style={{flex: 2, backgroundColor: '#00FF00'}}></View>
      <View style={{flex: 3, backgroundColor: '#0000FF'}}></View>
    </View>
  );
};

// export default class Workshop4 extends Component {
//   render() {
//     return(
//       <View style={{flex: 1, flexDirection:'row'}}>
//         <View style={{flex: 1, backgroundColor: '#FF0000'}}></View>
//         <View style={{flex: 2, backgroundColor: '#00FF00'}}></View>
//         <View style={{flex: 3, backgroundColor: '#0000FF'}}></View>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  contrainer : {
    flex : 1,
    flexDirection : 'column',
    backgroundColor : '#FFFFFF',
    alignItems : 'flex-start',
    justifyContent : 'flex-start'
  },
  textBox : {
    fontSize : 30,
    fontWeight : 'bold',
    width : 200, 
    height : 200, 
    backgroundColor : '#00FFFF'
  }
});

