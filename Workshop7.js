/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default Workshop7 = () => {
  return(
    <View style={{flex:1,alignItems: 'flex-start',justifyContent: 'flex-start', baclgroundColor: '#FFFFFF'}}>
      <View style={{width: 50, height: 50, backgroundColor: '#FF0000'}}></View>
      <View style={{width: 100, height: 100, backgroundColor: '#00FF00'}}></View>
      <View style={{width: 159, height: 150, backgroundColor: '#0000FF'}}></View>
    </View>
  );
}