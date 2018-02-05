import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import { login } from '../utils/api'

export default class Login extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.loginUser = this.loginUser.bind(this)
  }

  componentDidMount() {
    this._loadInitialState().done()
  }

  _loadInitialState = async () => {
    let value = await AsyncStorage.getItem('user')
    if (value !== null) {
      this.props.navigation.navigate('Tabs')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}>- LOGIN -</Text>

          <TextInput style={styles.textInput} placeholder='Username' onChangeText={ (username) => this.setState({username}) } underlineColorAndroid='transparent' />

          <TextInput style={styles.textInput} placeholder='Password' onChangeText={ (password) => this.setState({password}) } underlineColorAndroid='transparent' secureTextEntry={true} />

          <TouchableOpacity style={styles.btn} onPress={this.loginUser}>
            <Text>Log in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }


loginUser = () => {
  //this.props.navigation.navigate('Tabs')
  fetch('http://localhost:8080/auth/login-mobile', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: this.state.username,
      password: this.state.password
    })
  }).then(result => result.json())
    .then((res) => {
      if (res.email) {
        //console.log(res, 'resssss')
        alert(`Hello ${res.first} ${res.last}`)
         login(res)
         .then(response => this.props.navigation.navigate('Tabs'))

        // AsyncStorage.setItem('user', res.user)

      }
      else {
        console.log(res, 'resssss')
        alert('User not found')
      }
    })
    .done()


}
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center'
  }
})
