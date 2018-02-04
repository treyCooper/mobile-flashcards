import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton';
// import { saveDeckTitle } from '../utils/api';
import { NavigationActions } from 'react-navigation';
//import SingleDeck from './SingleDeck';

export default class NewDeck extends Component {
  state = {
    text: 'You are not at Smart Mart'
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
