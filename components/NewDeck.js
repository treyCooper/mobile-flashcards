import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton';
import { saveDeckTitle } from '../utils/api';
import { NavigationActions } from 'react-navigation';
import SingleDeck from './SingleDeck';

export default class NewDeck extends Component {
  state = {
    text: ''
}

addDeck = () => {

 return saveDeckTitle(this.state.text)
    .then(this.goToDeck(this.state.text))
}

goToDeck = (name) => {
  const { navigate } = this.props.navigation;
  return navigate('SingleDeck', { name })
}

  render() {
    return (
      <View style={styles.container}>
        <Text>
        What is the title of your new deck?
        </Text>
        <View>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Placeholder Title'}
        />
        <TextButton style={{padding: 10}} onPress={this.addDeck}>
            Add Deck
          </TextButton>
        </View>

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
