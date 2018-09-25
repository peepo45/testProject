/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop3 extends Component {

  render(){
    const { contrainer, textBox } = styles;

    return(
      <View style={contrainer}>
        <View style={{width:50, height:50, backgroundColor: '#FF0000'}}></View>
        <View style={{width:100, height:100, backgroundColor: '#00FF00'}}></View>
        <View style={{width:150, height:150, backgroundColor: '#0000FF'}}></View>
        <Text style={textBox}>Hello World</Text>
      </View>
    );
  }
}

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

