import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Star from './Star';

export default class Rating extends React.Component {
  renderStars() {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star key={i} disabled={this.props.ratingValue > i ? false : true} />
      );
    }

    return stars;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderStars()}
        <Text>{this.props.reviews} reviews</Text>
      </View>
    );
  }
}

Rating.propTypes = {
  ratingValue: React.PropTypes.number,
  reviews: React.PropTypes.number
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
