import {StatusBar, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
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
    borderRadius: 50 / 2,
  },
  avatar: {
    width: '20%',
  },
  details: {
    width: '80%',
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
