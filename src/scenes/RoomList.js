import React from 'react';
import {
  AsyncStorage,
  ActivityIndicator,
  View,
} from 'react-native';

import List from '../components/room/List'
import Backend from '../configs/Backend'
import Layout from '../configs/Layout'

export default class RoomList extends React.Component {
  state = {
    isLoading: true,
    rooms: [],
  }

  async persistRoom(room) {
    try {
      await AsyncStorage.setItem('room', JSON.stringify(room));
    } catch (error) {
      // Error saving data
    }
  }

  async getStoredRoom() {
    const value = await AsyncStorage.getItem('room');

    try {
      if (value !== null){
        // We have data!!
        console.log(value);
        const roomObject = JSON.parse(value);
        console.log(roomObject);
      }
    } catch (error) {
        // Error retrieving data
    }
  }

  // getStoredRoom() {
  //   try {
  //     AsyncStorage.getItem('room').then((value) => {
  //       if (value !== null){
  //         // We have data!!
  //         console.log(value);
  //         const roomObject = JSON.parse(value);
  //         console.log(roomObject);
  //       }
  //     });
  //   } catch (error) {
  //       // Error retrieving data
  //   }
  // }

  componentWillMount() {
    Backend.getRooms((room) => {
      console.log('room', room)

      // this.persistRoom(room);
      this.getStoredRoom();

      this.setState({
        isLoading: false,
        rooms: this.state.rooms.concat(room),
      })
    })
  }

  render() {
    if(this.state.isLoading) {
      return (
        <View style={Layout.tabContainer}>
          <ActivityIndicator style={{marginTop: 20}} size="large" />
        </View>
      )
    }

    return(
      <View style={Layout.tabContainer}>
        <List
          rooms={this.state.rooms}
        />
      </View>
    );
  }
}
