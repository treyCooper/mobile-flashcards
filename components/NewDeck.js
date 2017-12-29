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
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home', params: { name }})
      ]
    })
    this.props.navigation.dispatch(resetAction)
    const { navigate } = this.props.navigation;
    return navigate('SingleDeck', { name })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>
        What is the title of your new deck?
        </Text>
        <View>
          <TextInput
            style={{height: 40, width: 300, borderColor: 'gray', borderRadius: 5, borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            placeholder={'Placeholder Title'}
          />
          <TextButton style={{width: 300}} onPress={this.addDeck}>
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
    paddingTop: 100,
  },
  prompt: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,
    width: 300
  },
});
