import AsyncStorage from '@react-native-async-storage/async-storage';

// Redux Persist Configuration
const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

export default userPersistConfig;
