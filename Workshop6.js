/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default Workshop6 = () => {
  return(
    <View style={styles.contrainer}>
      <BlinkText message=" Peepo45 " interval={300} />
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
    }, this.props.interval);
  }

  render(){
    let display = this.state.isVisible ? this.props.message : '';
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
    alignItems: 'center',
    backgroundColor: '#FF0000'
  },
  myTextBox : {
    textAlign: 'center', 
    color:'#FFFFFF', 
    fontSize: 30, 
    fontWeight: 'bold', 
    backgroundColor: "#0000FF"
  }
});