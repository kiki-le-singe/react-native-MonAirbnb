import React from 'react';
import { StyleSheet, ListView, View } from 'react-native';

import Row from './Row';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(props.rooms),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.rooms) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.rooms),
      })
    }
  }

  renderSeparator(sectionID, rowID) {
    return (
      <View key={`${sectionID}-${rowID}`} style={styles.separator} />
    )
  }

  renderRooms(room) {
    return (
      <Row {...room} />
    )
  }

  render() {
    return (
      <ListView
        enableEmptySections
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={this.renderRooms}
        renderSeparator={this.renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    padding: 20,
  },
  separator: {
    marginBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#d8d8d8',
  },
});
