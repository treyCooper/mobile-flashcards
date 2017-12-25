import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDeck  } from '../utils/api';
import TextButton from './TextButton';
import { NavigationActions } from 'react-navigation';

export default class SingleDeck extends Component {
  state = {
    deck: {questions: []}
  }
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
  });
  componentDidMount() {
    getDeck(this.props.navigation.state.params.name)
  .then((results) => this.setState(() => ({deck: results})))

  }
  goToQuiz = (name) => {
    const { navigate } = this.props.navigation;
    return navigate('Quiz', { name })
  }

  addCard = (name) => {
    const { navigate } = this.props.navigation;
    return navigate('AddCard', { name })
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
      <TextButton style={{padding: 10}} onPress={() => this.addCard(deck.title)}>
            Add Card
      </TextButton>
      <TextButton style={{padding: 10}} onPress={() => this.goToQuiz(deck.title)}>
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
