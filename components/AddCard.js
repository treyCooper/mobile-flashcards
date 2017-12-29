import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton';
import { addCardToDeck } from '../utils/api';
import { NavigationActions } from 'react-navigation';
import SingleDeck from './SingleDeck';

export default class NewDeck extends Component {
  state = {
    question: '',
    answer: '',
    title: ''
}

  componentDidMount() {
    this.setState(() => ({title: this.props.navigation.state.params.name}))
  }
  addCard = (title) => {
    const qna = {
      'question': this.state.question,
      'answer': this.state.answer
    }
    addCardToDeck(title, qna)
      this.goToDeck(this.state.title, qna)
  }

  goToDeck = (name, qna) => {
    const { navigate, state } = this.props.navigation;
    this.props.navigation.state.params.navBack(name)
    const backAction = NavigationActions.back({
      key: null
    })
    this.props.navigation.dispatch(backAction)
  }
  render() {
    const title = this.props.navigation.state.params.name
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>
          Question
        </Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            placeholder={'Question'}
          />
        </View>
        <Text style={{fontSize: 25}}>
          Answer
        </Text>
        <View>
          <TextInput
            style={styles.input}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder={'Answer'}
          />
        </View>
        <TextButton onPress={() => this.addCard(title)}>
            Add Card
        </TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 80
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20
  }
});
