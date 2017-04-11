import React from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import Headline from '../components/room/Headline';
import Gallery from '../components/room/Gallery';
import Description from '../components/room/Description';
import Map from '../components/room/Map';
import Book from '../components/room/Book';
import Layout from '../configs/Layout'

export default class Room extends React.Component {
  render() {
    const {
      location: {longitude, latitude},
      description,
      photos,
      price,
      title,
      ratingValue,
      reviews,
      user
    } = this.props.data

    console.log('props', this.props)

    return(
      <ScrollView style={Layout.tabContainer}>
        <Gallery photos={photos} price={price} />
        <Headline title={title} ratingValue={ratingValue} reviews={reviews} user={user} />
        <Description description={description} />
        <View style={{padding: 10}}>
          <Map latitude={latitude} longitude={longitude} />
        </View>
        <View style={{padding: 10, marginTop: 10}}>
          <Book />
        </View>
      </ScrollView>
    );
  }
}
