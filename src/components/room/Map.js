import React from 'react'
import {
  StyleSheet,
  TouchableHighlight,
  Linking,
  View,
  Platform,
} from 'react-native'

import MapView from 'react-native-maps'

const LAT_DELTA = 0.01
const LONG_DELTA = 0.01

export default class Maps extends React.Component {

  openURL = () => {
    const { latitude, longitude } = this.props
    const url = (Platform.OS === 'ios') ?
      `http://maps.apple.com/?ll=${latitude},${longitude}` : `https://www.google.com/maps?q=${latitude},${longitude}`

    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err));
  }

  render() {
    const { latitude, longitude } = this.props
    return (
        <TouchableHighlight onPress={this.openURL}>
          <View>
            <MapView
              zoomEnabled={false}
              rotateEnabled={false}
              scrollEnabled={false}
              pitchEnabled={false}
              region={{
                latitude,
                longitude,
                latitudeDelta: LAT_DELTA,
                longitudeDelta: LONG_DELTA,
              }}
              style={styles.map}
            >
              <MapView.Marker
                coordinate={{
                  latitude,
                  longitude,
                }}
                title='Super title'
                description='Super description'
              />
          </MapView>
        </View>
      </TouchableHighlight>
    )
  }
}

Maps.defaultProps = {
  latitude: 0,
  longitude: 0,
}

Maps.propTypes = {
  latitude: React.PropTypes.number,
  longitude: React.PropTypes.number,
}

const styles = StyleSheet.create({
  map: {
    height: 200,
  }
})
