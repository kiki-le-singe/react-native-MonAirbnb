import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Description extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text numberOfLines={3}>
          {this.props.description}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
