import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchDecks  } from '../utils/api'

export default class DeckList extends Component {
  state = {
    decks: {}
  }
  componentDidMount() {
    fetchDecks()
  .then((results) => this.setState(() => ({decks: results})))
  }

  render () {
    console.log('state2', this.state)
    const { decks } = this.state;
    return (
      Object.keys(decks).map((deck) => {
        return (
        <View style={styles.container} key={decks[deck].title}>
          <Text>
          {decks[deck].title}
          </Text>
          <Text>
            {`${decks[deck].questions.length} ${decks[deck].questions.length === 1 ? 'card' : 'cards'}`}
          </Text>
        </View>)
        // return <SingleDeck deck={}/>
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
    borderBottomWidth: 1
  },
});
