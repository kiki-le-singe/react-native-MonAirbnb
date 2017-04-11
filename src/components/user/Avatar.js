import React from 'react'
import { StyleSheet, Image } from 'react-native'

export default class Avatar extends React.Component {
  render() {
    const { size, avatar, style } = this.props

    return (
      <Image source={{uri: avatar}} style={[styles[size], style]} />
    )
  }
}

Avatar.defaultProps = {
  size: 'large'
}

Avatar.propTypes = {
  size: React.PropTypes.string
}

const styles = StyleSheet.create({
  small: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  large: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
})
