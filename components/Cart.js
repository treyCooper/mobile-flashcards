import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton';
// import { saveDeckTitle } from '../utils/api';
import { NavigationActions } from 'react-navigation';
window.navigator.userAgent = 'react-native'
import io from 'socket.io-client/dist/socket.io'
//import SingleDeck from './SingleDeck';

export default class Cart extends Component {
  static navigationOptions = {
    title: 'My Cart',
  }
  state = {
    text: 'You are not at Smart Mart'
}
  constructor(){
    super()
    this.socket = io('localhost:8080', {jsonp: false})
    this.socket = io('update', (data) => this.setState({text: 'IT WORKED'}))
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>
          {this.state.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  prompt: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
    width: 300
  },
});
