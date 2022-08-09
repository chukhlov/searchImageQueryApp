import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  image: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
  },
  imageLoader: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  imageDescriptions: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  positionTop: {
    top: 0,
  },
  positionBottom: {
    bottom: 0,
  },
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  title: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  green: {
    color: 'green',
  },
  white: {
    color: '#fff',
  },
  spaceTop: {
    marginTop: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  spaceLeft: {
    marginLeft: 10,
  },
});
