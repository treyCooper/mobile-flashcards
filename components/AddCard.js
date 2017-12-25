import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton';

export default class NewDeck extends Component {
  state = {
    title: 'What is the title of your new deck?',
    question: '',
    answer: ''
}


  render() {
    console.log(this.props.navigation.state.params.name)
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
        <TextButton style={{padding: 10}} onPress={this.reset}>
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
