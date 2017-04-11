import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Row from './Row';

export default class List extends React.Component {

  renderRooms() {
    const { rooms } = this.props

    return rooms.map((room, index) => {
      return (
        <Row
          key={index}
          {...room}
        />
      )
    })
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {this.renderRooms()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 10,
  },
});
