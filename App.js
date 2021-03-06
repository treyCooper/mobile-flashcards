import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import SingleDeck from './components/SingleDeck';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants } from 'expo';
import { setLocalNotification } from './utils/helpers';
import { blue, white, gray } from './utils/colors';


function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={35} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? blue : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : blue,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  SingleDeck: {
    screen: SingleDeck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue,
      }
    }
  }
})



export default class App extends React.Component {
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <View style={styles.container}>
        <UdaciStatusBar backgroundColor={gray} barStyle='light-content' />
        <MainNavigator style={styles.title} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
