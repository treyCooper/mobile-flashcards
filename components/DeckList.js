import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DeckList extends Component {
  state = {
    decks: [
      {
        title: 'React',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    ]
  }

  render () {
    const { decks } = this.state;
    return (
      decks.map((deck) => {
        return (
        <View style={styles.container} key={deck.title}>
          <Text>
            {deck.title}
          </Text>
          <Text>
            {`${deck.questions.length} ${deck.questions.length === 1 ? 'card' : 'cards'}`}
          </Text>
        </View>)
        // return <SingleDeck deck={}/>
      })
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 375,
    borderBottomWidth: 1
  },
});
