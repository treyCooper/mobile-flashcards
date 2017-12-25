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
    showAnswer: false,
    cardNum: 0,
    quizOver: false
  }

  componentDidMount() {
    getDeck("React")
  .then((results) => this.setState(() => ({deck: results})))
  }

  flipCard = (showAnswer) => this.setState(() => ({showAnswer: !showAnswer}))

  nextCard = (cardNum, deck) => {
    cardNum++;
   if (cardNum < deck.questions.length){
      this.setState(() => ({ cardNum: cardNum }) )
   } else {
    this.setState(() => ({ quizOver: true }) )
     }
  }
  render () {
    const { deck, showAnswer, cardNum, quizOver } = this.state;
    return !quizOver ?
    (
      <View style={{flex: 1}}>
        <Text style={styles.counter}>
          {`${cardNum + 1}/${deck.questions.length}`}
        </Text>
        <View style={styles.container}>
          <Text>
            {showAnswer ? deck.questions[cardNum].answer : deck.questions[cardNum].question}
          </Text>
          <TextButton style={{padding: 10}} onPress={() => this.flipCard(showAnswer)}>
                {!showAnswer ? 'Answer' : 'Question'}
          </TextButton>
          <TextButton style={{padding: 10}} onPress={() => this.nextCard(cardNum, deck)}>
                Correct
          </TextButton>
          <TextButton style={{padding: 10}} onPress={() => this.nextCard(cardNum, deck)}>
                Incorrect
          </TextButton>
        </View>
      </View>
      )
      :  (
        <View style={styles.container}>
          <Text>
            Quiz is Over
          </Text>
        </View>

    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 120,
  },
  counter: {
    paddingTop: 100,
    paddingLeft: 50,


  }
});
