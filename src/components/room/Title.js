import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Title extends React.Component {
  render () {
    return (
      <View>
        <Text style={styles.roomName} numberOfLines={1}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

Title.defaultProps = {
  children: 'Valeur par default',
};

Title.propTypes = {
  children: React.PropTypes.string,
};

const styles = StyleSheet.create({
  roomName: {
    fontSize: 20
  }
});

export default Title;
