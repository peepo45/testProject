/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default Workshop9 = () => {
  return(
    <View style={styles.contrainer}>
      <View style={{width: 50, height: 50, backgroundColor: '#FF0000'}}></View>
      <View style={{width: 100, height: 100, backgroundColor: '#00FF00'}}></View>
      <View style={{width: 150, height: 150, backgroundColor: '#0000FF'}}></View>
      <MyText message='Hello'></MyText>
    </View>
  );
}

class MyText extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const display = this.props.message;
    return(
      <Text style={styles.myTextBox}>
        {display}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  contrainer : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#FFFF00'
  },
  myTextBox : {
    width: 250,
    height: 250,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#000000'
  }
});