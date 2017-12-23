import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SingleDeck extends Component {
  state = {
    deck: {key: 'value'}
  }
  render () {
    return (
      <View style={styles.container}>
      <Text>
        {this.state.deck.key}
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
