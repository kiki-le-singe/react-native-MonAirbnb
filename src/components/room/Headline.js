import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Title from './Title';
import Rating from './Rating';
import Avatar from '../user/Avatar';

export default class Headline extends React.Component {
  render() {
    const { title, ratingValue, reviews, user } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.colLeft}>
          <Title>{title}</Title>
          <Rating ratingValue={ratingValue} reviews={reviews} />
        </View>
        <Avatar avatar={user.avatar} size='small' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  colLeft: {
    flex: 1
  }
})
