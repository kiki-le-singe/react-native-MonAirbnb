/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import {Scene, Router, TabBar, Actions} from 'react-native-router-flux';

import RoomList from './scenes/RoomList';
import Room from './scenes/Room';
import Profile from './scenes/Profile';
import SignUp from './scenes/SignUp';

import TabIcon from './components/core/TabIcon';
import Layout from './configs/Layout';

export default class App extends Component {
  componentWillMount() {
    if (Platform.OS === 'ios') {
      // StatusBar.setBarStyle('default');
      StatusBar.setBarStyle('light-content');
    }
  }

  homeTabIcons(props) {
    return <TabIcon {...props} name='md-home'/>
  }

  contactTabIcons(props) {
    return <TabIcon {...props} name='md-contact'/>
  }

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="tabbar" tabs tabBarStyle={styles.tabbar}>
            <Scene
              key="roomList"
              component={RoomList}
              title="Home"
              icon={this.homeTabIcons}
              titleStyle={{color: 'white'}}
              navigationBarStyle={{backgroundColor: Layout.mainColor}}
            />
            <Scene
              key="profile"
              component={Profile}
              title="Profile"
              icon={this.contactTabIcons}
              titleStyle={{color: 'white'}}
              navigationBarStyle={{backgroundColor: Layout.mainColor}}
            />
          </Scene>

          <Scene
            key="room"
            component={Room}
            title="Room"
            titleStyle={{color: 'white'}}
            navigationBarStyle={{backgroundColor: Layout.mainColor}}
            leftButtonIconStyle={{tintColor: 'white'}}
          />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
    borderTopColor: '#d8d8d8',
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'white',
    // backgroundColor: Layout.mainColor,
  }
})
