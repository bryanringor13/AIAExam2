import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux Persist Configuration
const articlePersistConfig = {
  key: 'article',
  storage: AsyncStorage,
};

export default articlePersistConfig;
