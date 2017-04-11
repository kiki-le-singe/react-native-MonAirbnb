import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Name extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.name}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

Name.propTypes = {
  children: React.PropTypes.string,
};

Name.defaultProps = {
  children: '',
};

const styles = StyleSheet.create({
  name: {
    color: 'green',
  },
});

export default Name;
