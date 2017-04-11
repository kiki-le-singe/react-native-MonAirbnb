import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

export default class Book extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'rgb(231, 15, 15)'}
        onPress={() => console.log('onPress')}
      >
        <Text style={styles.text}>Book</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fc5c63',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  text: {
    color: 'rgb(255, 255, 255)',
    fontSize: 22,
  },
});
