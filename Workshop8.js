/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const Workshop8 = () => {
  return(
    <View style={styles.contrainer}>
      <BlinkText message='รัก' interval={300} />
    </View>
  );
}

class BlinkText extends Component {

  constructor(props){
    super(props);
    this.state = {isVisible: true};
    setInterval( () => {
      this.setState(oldState => {
        return({isVisible: !oldState.isVisible});
      });
    },this.props.interval);
  }

  render(){
    const display = this.state.isVisible ? this.props.message : 'ที่สุด';
    return(
      <Text style={styles.myText}>
        {display}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  contrainer : {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF0000'
  },
  myText : {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold'
  }
});

export default Workshop8;