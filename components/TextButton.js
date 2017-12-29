import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { purple, white, blue } from '../utils/colors'
export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity  style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: white,
    padding: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: blue,
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 15,
    width: 200
  }
})
