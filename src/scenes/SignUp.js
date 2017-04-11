import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  DatePickerIOS,
  Picker,
  Switch,
} from 'react-native';

import {Actions, ActionConst} from 'react-native-router-flux'

import Layout from '../configs/Layout'

export default class SignUp extends React.Component {
  static defaultProps = {
    gender: 'female',
    isHost: false,
    // isHost: true,
    nameInput: '',
    birthday: new Date(),
  };

  constructor(props) {
    super(props);

    this.state = {
      ...props
    };
  }

  onChangeText = (nameInput) => {
    this.setState({nameInput})
  }

  onDateChange = (birthday) => {
    this.setState({birthday})
  }

  onValueChange = (gender) => {
    this.setState({gender})
  }

  onSwitchValueChange = (isHost) => {
    this.setState({isHost})
  }

  handlePress = () => {
    // Actions.tabbar({type: ActionConst.RESET});
    const { nameInput, birthday, gender, isHost } = this.state

    alert(nameInput);
    // alert(birthday);
    // alert(gender);
    // alert(isHost);
  }

  render() {
    return(
      <View style={[Layout.tabContainer, styles.container]}>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={this.onChangeText}
            value={this.state.nameInput}
            placeholder='Name'
            />
        </View>

        <View>
          <Text style={styles.label}>Birthday</Text>
          <DatePickerIOS
            date={this.state.birthday}
            mode="datetime"
            onDateChange={this.onDateChange}
          />
        </View>

        <View>
          <Picker
            selectedValue={this.state.gender}
            onValueChange={this.onValueChange}>
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </View>

        <View style={styles.switchContainer}>
          <Text style={[styles.label, styles.switchText]}>Host</Text>
          <Switch
            onValueChange={this.onSwitchValueChange}
            value={this.state.isHost}
          />
        </View>

        <TouchableOpacity onPress={this.handlePress} style={styles.button}>
          <Text style={styles.text}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: Layout.mainColor,
    borderWidth: 2,
    padding: 10,
    color: Layout.mainColor,
  },
  button: {
    marginTop: 20,
    backgroundColor: Layout.mainColor,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  text: {
    color: '#ffffff',
    fontSize: 22,
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Layout.mainColor,
    fontSize: 22,
  },
  switchText: {
    marginRight: 10,
  },
});
