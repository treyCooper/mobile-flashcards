import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { fetchDecks  } from '../utils/api';
import { NavigationActions } from 'react-navigation'
import SingleDeck from './SingleDeck';
export default class DeckList extends Component {
  state = {
    decks: {}
  }

  static navigationOptions = {
    title: 'Deck List',
  };

  componentDidMount() {
    fetchDecks()
  .then((results) => this.setState(() => ({decks: results})))
  }

  goToDeck = (name) => {
    const { navigate } = this.props.navigation;
    return navigate('SingleDeck', { name })
  }

  render () {
    const { decks } = this.state;
    return (
      Object.keys(decks).map((deck) => {
        return (
          <View style={styles.container} key={decks[deck].title}>
          <TouchableOpacity onPress={() => this.goToDeck(decks[deck].title)}>
          <View style={styles.container}>
            <Text>
            {decks[deck].title}
            </Text>
            <Text>
              {`${decks[deck].questions.length} ${decks[deck].questions.length === 1 ? 'card' : 'cards'}`}
            </Text>
        </View>
        </ TouchableOpacity>
        </View>)
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
    borderBottomWidth: 0.5
  },
});
