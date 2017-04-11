import React from 'react';
import { TouchableHighlight, StyleSheet, View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

import Gallery from './Gallery';
import Headline from './Headline';

export default class Row extends React.Component {
  goToRoomPage = () => {
    Actions.room({ data: this.props })
  }

  render() {
    const { photos, price, title, ratingValue, reviews, user } = this.props

    return (
      <TouchableHighlight onPress={this.goToRoomPage} underlayColor='transparent'>
        <View style={styles.container}>
          <Gallery photos={photos} price={price} />
          <Headline title={title} ratingValue={ratingValue} reviews={reviews} user={user} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    // borderBottomWidth: 1,
    // borderBottomColor: '#d8d8d8',
    // marginBottom: 20,
  },
});
