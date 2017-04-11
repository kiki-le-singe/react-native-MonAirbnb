import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabIcon extends Component {
  render() {
    const { color, name, selected } = this.props
    const _color = selected ? color : 'grey'

    return (
      <Icon name={name} size={30} color={_color} />
    );
  }
}

TabIcon.defaultProps = {
  selected: false
}

TabIcon.propTypes = {
  selected: React.PropTypes.bool
}
