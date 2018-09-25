/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Workshop1 extends Component {
  render(){
    return(
      <View style={{flex : 1, flexDirection : 'column', justifyContent : 'flex-start', alignItems : 'center', backgroundColor : '#F000F0'}}>
        <BlinkText message="Peepo45" interval={300} />
        <BlinkText message="Temper45" interval={100} />
      </View>
    );
  }
}

class BlinkText extends Component {

  constructor(props){
    super(props);
    this.state = {isVisible : true};
    setInterval( () => {
      this.setState(oldState => {
        return({isVisible : !oldState.isVisible});
      });
    },this.props.interval);
  }

  render(){
    let display = this.state.isVisible ? this.props.message : '';
    return(
      <Text style={{color : '#FFFFFF', textAlign : 'center', fontSize : 30, fontWeight : 'bold'}}>
        {display}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  contrainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'flex-start',
    alignItems: 'center'
  }
});
