import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, Dimensions } from 'react-native';

export default class Gallery extends React.Component {
  renderImage() {
    const { photos } = this.props
    const { width } = Dimensions.get('window')

    return photos.map((photo, index) => {
      if (!photo) {
        return null
      }

      console.log('photo', photo)

      return (
        <Image
          key={index}
          source={{uri: photo}}
          style={[styles.image, {
            width
          }]}
        />
      )
    })
  }

  render() {
    const { price } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>
            {price}
          </Text>
        </View>
        <ScrollView horizontal>
          {this.renderImage()}
        </ScrollView>
      </View>
    );
  }
}

Gallery.propTypes = {
  price: React.PropTypes.string,
};

Gallery.defaultProps = {
  price: '€0',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  price: {
    color: 'white',
    fontSize: 22,
  },
  containerPrice: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    zIndex: 1,
  },
  image: {
    height: 250,
  },
});
