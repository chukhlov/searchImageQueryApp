import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  item: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  grow: {
    flexGrow: 1,
  },
  alignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  reloadButton: {
    marginTop: 20,
  },
  reloadButtonText: {fontSize: 20, color: 'orange'},
});
