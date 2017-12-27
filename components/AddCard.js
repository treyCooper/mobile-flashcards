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
      this.goToDeck(this.state.title)
  }

  goToDeck = (name) => {
    const { navigate } = this.props.navigation;
    return navigate('SingleDeck', { name })
  }
  render() {
    const title = this.props.navigation.state.params.name
    return (
      <View style={styles.container}>
        <Text>
          Question
        </Text>
        <View>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          placeholder={'Question'}
        />
        </View>
        <Text>
          Answer
        </Text>
        <View>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          placeholder={'Answer'}
        />
        </View>
        <TextButton style={{padding: 10}} onPress={() => this.addCard(title)}>
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
    paddingTop: 100
  },
});
