import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Avatar from '../components/user/Avatar'
import Layout from '../configs/Layout'

export default class Profile extends React.Component {
  render() {

    return(
      <View style={[styles.container, Layout.screen]}>
        <Avatar avatar='https://firebasestorage.googleapis.com/v0/b/leairbnb-da99e.appspot.com/o/images%2Fusers%2Fuser1.jpg?alt=media' />
        <Text>
          Jen
        </Text>
        <Text>
          I travel a lot, and what i want on a travel journey i will give this also to my customers. We will help you in our country. Rooms are filled with panflat's from Amsterdam and Zaanse Schans. Clean ....and you can ask evrything what you want to know about Holland ;)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
})
