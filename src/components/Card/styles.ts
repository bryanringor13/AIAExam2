import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    backgroundColor: '#008d7f82',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: '20%',
  },
  details: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  likeContainer: {
    flexDirection: 'row',
  },
  likeBox: {
    width: 50,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  like: {
    color: '#FFFFFF',
    fontSize: 10,
  },
  likeCounter: {
    marginLeft: 5,
    justifyContent: 'center',
  },
  counter: {
    fontSize: 10,
  },
  description: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
  },
  title: {
    fontSize: 10,
  },
});
