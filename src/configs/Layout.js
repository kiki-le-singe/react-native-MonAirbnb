import { Platform } from 'react-native'

const mainColor = '#FF3754';
const screen = {
  flex: 1,
  paddingTop: Platform.OS === 'ios' ? 64 : 54,
  // paddingBottom: Platform.OS === 'ios' ? 64 : 54,
  backgroundColor: '#ffffff',
}

export default {
  tabContainer: {
    ...screen,
    marginBottom: 24,
  },
  mainColor,
  screen
};
