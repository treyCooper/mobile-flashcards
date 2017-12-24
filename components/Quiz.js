import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDeck  } from '../utils/api';
import TextButton from './TextButton';

export default class Quiz extends Component {
  state = {
    deck: {
      questions: [
        {
          question: '',
          answer: ''
        }
      ]
    },
    showAnswer: false
  }

  componentDidMount() {
    getDeck("React")
  .then((results) => this.setState(() => ({deck: results})))
  }

  flipCard = (showAnswer) => this.setState(() => ({showAnswer: !showAnswer}))

  render () {
    const { deck, showAnswer } = this.state;
    return (
      <View style={styles.container}>
      <Text>
        {showAnswer ? deck.questions[0].answer : deck.questions[0].question}
      </Text>
      <TextButton style={{padding: 10}} onPress={() => this.flipCard(showAnswer)}>
            {!showAnswer ? 'Answer' : 'Question'}
      </TextButton>
      <TextButton style={{padding: 10}} onPress={this.addLater}>
            Correct
      </TextButton>
      <TextButton style={{padding: 10}} onPress={this.addLater}>
            Incorrect
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
