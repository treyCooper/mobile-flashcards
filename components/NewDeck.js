import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class NewDeck extends Component {
  state = {
    title: 'What is the title of your new deck?',
    text: ''
}


  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.title}
        </Text>
        <View>
        <TextInput
          style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Placeholder Title'}
        />
        </View>
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
