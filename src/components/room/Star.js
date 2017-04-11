import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class Star extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={[styles.star, {
            color: this.props.disabled ? 'grey' : 'gold'
          }]}
        >
          ★
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  star: {
    fontSize: 18,
  }
})

Star.defaultProps = {
  disabled: false
}

Star.propTypes = {
  disabled: React.PropTypes.bool
}
