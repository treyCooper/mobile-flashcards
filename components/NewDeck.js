import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewDeck extends Component {
  state = {
    title: 'What is the title of your new deck?'
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.title}
        </Text>
      </View>
    )
  }
}
