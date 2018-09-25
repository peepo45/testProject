/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default Workshop5 = () => {
  return(
    <View style={{flex : 1, flexDirection : 'column', justifyContent : 'center', alignItems : 'center', backgroundColor : '#FF0000' }}>
      <BlinkText message='Peepo45' interval={200}/>
    </View>
  );
}

class BlinkText extends Component {
  render(){
    let display = this.props.message;
    return(
      <Text style={{textAlign:'center', color:'#0000FF', fontSize:30, fontWeight:'bold'}}>
        {display};
      </Text>
    );
  }
}


