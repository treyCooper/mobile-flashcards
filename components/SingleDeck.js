import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDeck  } from '../utils/api';
import TextButton from './TextButton';

export default class SingleDeck extends Component {
  state = {
    deck: {questions: []}
  }

  componentDidMount() {
    getDeck("React")
  .then((results) => this.setState(() => ({deck: results})))
  }

  render () {
    const { deck } = this.state;
    return (
      <View style={styles.container}>
      <Text>
        {deck.title}
      </Text>
      <Text>
        {`${deck.questions.length} ${deck.questions.length === 1 ? 'card' : 'cards'}`}
      </Text>
      <TextButton style={{padding: 10}} onPress={this.addLater}>
            Add Card
      </TextButton>
      <TextButton style={{padding: 10}} onPress={this.addLater}>
            Start Quiz
      </TextButton>
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
