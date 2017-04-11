import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Biography extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    )
  }
}

Biography.propTypes = {
  children: React.PropTypes.string
}

Biography.defaultProps = {
  children: ''
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  }
})
