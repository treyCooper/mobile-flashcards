import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class NewDeck extends Component {
  state = {
    title: ''
  }

  render() {
    return (
      <View>
        <Text>
          What is the title of your new deck?
        </Text>
      </View>
    )
  }
}
