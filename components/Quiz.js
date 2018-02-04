// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { getDeck  } from '../utils/api';
// import TextButton from './TextButton';
// import { NavigationActions } from 'react-navigation';
// import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
// import { orange, red , green } from '../utils/colors';

// export default class Quiz extends Component {
//   state = {
//     deck: {
//       questions: [
//         {
//           question: '',
//           answer: ''
//         }
//       ]
//     },
//     showAnswer: false,
//     cardNum: 0,
//     quizOver: false,
//     count: 0
//   }

//   componentDidMount() {
//     getDeck(this.props.navigation.state.params.name)
//       .then((results) => this.setState(() => ({deck: results})))
//   }

//   flipCard = (showAnswer) => this.setState(() => ({showAnswer: !showAnswer}))

//   nextCard = (cardNum, deck) => {
//     cardNum++;
//    if (cardNum < deck.questions.length){
//       this.setState(() => ({ cardNum: cardNum }) )
//    } else {
//     this.setState(() => ({ quizOver: true }) )
//     clearLocalNotification()
//     .then(setLocalNotification)
//      }
//   }

//   backToHome = (name) => {
//     const { navigate } = this.props.navigation;
//     return navigate('Home')
//   }

//   restartQuiz = () => {
//     this.setState(() => ({ cardNum: 0, count: 0, quizOver: false }))
//   }

//   incrementCount = (cardNum, deck) => {
//     this.setState(() => ({ count: this.state.count + 1 }))
//     this.nextCard(cardNum, deck)
//   }

//   render () {
//     const { deck, showAnswer, cardNum, quizOver, count } = this.state;
//     return !quizOver ?
//       (
//         <View style={{flex: 1}}>
//           <Text style={styles.counter}>
//             {`${cardNum + 1}/${deck.questions.length}`}
//           </Text>
//           <View style={styles.container}>
//             <Text style={styles.cardText}>
//               {showAnswer ? deck.questions[cardNum].answer : deck.questions[cardNum].question}
//             </Text>
//             <TextButton onPress={() => this.flipCard(showAnswer)}>
//                   {!showAnswer ? 'Answer' : 'Question'}
//             </TextButton>
//             <TextButton style={{backgroundColor: green}} onPress={() => this.incrementCount(cardNum, deck)}>
//                 Correct
//             </TextButton>
//             <TextButton style={{backgroundColor: red}} onPress={() => this.nextCard(cardNum, deck)}>
//                 Incorrect
//             </TextButton>
//           </View>
//         </View>
//       )
//       :
//       (
//         <View style={styles.container}>
//           <Text style={styles.cardText}>
//             You scored {`${(count/deck.questions.length)*100}%`}
//           </Text>
//           <TextButton onPress={() => this.backToHome(deck.title)}>
//             Return to Deck List
//           </TextButton>
//           <TextButton style={{backgroundColor: orange}} onPress={() => this.restartQuiz()}>
//             Restart Quiz
//           </TextButton>
//         </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingTop: 50,
//   },
//   counter: {
//     paddingTop: 20,
//     paddingLeft: 20,
//     fontSize: 20
//   },
//   cardText: {
//       fontSize: 30,
//       fontWeight: 'bold'
//     },
// });
