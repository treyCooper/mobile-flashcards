import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDeck  } from '../utils/api';
import TextButton from './TextButton';
import { NavigationActions } from 'react-navigation';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
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
    quizOver: false,
    count: 0
  }

  componentDidMount() {
    getDeck(this.props.navigation.state.params.name)
  .then((results) => this.setState(() => ({deck: results})))
  }

  flipCard = (showAnswer) => this.setState(() => ({showAnswer: !showAnswer}))

  nextCard = (cardNum, deck) => {
    cardNum++;
   if (cardNum < deck.questions.length){
      this.setState(() => ({ cardNum: cardNum }) )
   } else {
    this.setState(() => ({ quizOver: true }) )
    clearLocalNotification()
    .then(setLocalNotification)
     }
  }

  backToHome = (name) => {
    const { navigate } = this.props.navigation;
    return navigate('Home')
    // this.props.navigation.dispatch(NavigationActions.back({
    //   key: 'DeckList'
    // }))
  }

  restartQuiz = () => {
    this.setState(() => ({ cardNum: 0, count: 0, quizOver: false }))
  }

  incrementCount = (cardNum, deck) => {
    this.setState(() => ({ count: this.state.count + 1 }))
    this.nextCard(cardNum, deck)
  }
  render () {
    const { deck, showAnswer, cardNum, quizOver, count } = this.state;
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
          <TextButton style={{padding: 10}} onPress={() => this.incrementCount(cardNum, deck)}>
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
            You scored {`${(count/deck.questions.length)*100}%`}
          </Text>
          <TextButton style={{padding: 10}} onPress={() => this.backToHome(deck.title)}>
            Return to Deck List
          </TextButton>
          <TextButton style={{padding: 10}} onPress={() => this.restartQuiz()}>
            Restart Quiz
          </TextButton>
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
