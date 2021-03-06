import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { getDeck  } from '../utils/api';
import TextButton from './TextButton';
import { orange, white } from '../utils/colors'
import { NavigationActions } from 'react-navigation';

function CanStartQuiz (props) {
  return props.numCards > 0 ? (
    <TextButton style={{backgroundColor: orange}} onPress={() => props.quiz(props.deckTitle)}>
      Start Quiz
    </TextButton>
  ) :
  (
    <Text>
      This deck does not have any cards. Please add cards to start a quiz on this subject.
    </Text>
  )
}

export default class SingleDeck extends Component {
  state = {
    deck: {questions: []},
    opacity: new Animated.Value(0)
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name
  });

  componentDidMount() {
    const { opacity } = this.state;
    getDeck(this.props.navigation.state.params.name)
      .then((results) => this.setState(() => ({deck: results})))
        .then(() => Animated.timing(opacity, { toValue: 1, duration: 1000})
          .start()
        )
  }

  goToQuiz = (name) => {
    const { navigate } = this.props.navigation;
    return navigate('Quiz', { name })
  }

  handleNavBack = (qna) => {
    const newDeck = this.state.deck;
    newDeck.questions.push(qna)
   this.setState(() => ({deck: newDeck}))
  }

  addCard = (name) => {
    const { navigate } = this.props.navigation;
    return navigate('AddCard', {
      name,
      navBack: this.handleNavBack
    })
  }

  render () {
    const { deck, opacity } = this.state;
    return (
      <Animated.View style={[styles.container, { opacity }]}>
        <Text style={styles.title}>
          {deck.title}
        </Text>
        <Text style={{fontSize: 25, marginBottom: 50}}>
          {`${deck.questions.length} ${deck.questions.length === 1 ? 'card' : 'cards'}`}
        </Text>
        <TextButton onPress={() => this.addCard(deck.title)}>
          Add Card
        </TextButton>
          <CanStartQuiz deckTitle={deck.title} quiz={this.goToQuiz} numCards={deck.questions.length} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 15
  },
});
