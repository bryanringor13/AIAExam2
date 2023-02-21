/* eslint-disable react-hooks/exhaustive-deps */
import {FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import userActions from '../../redux/user/actions';
import {ARTICLE} from '../../redux/article/constant';
import Card from '../../components/Card';

const UserScreen = ({navigation}: UserScreenProps) => {
  const {userList} = useSelector((state: ReduxState) => state.user);
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState<any>([]);

  const navigateToArticle = (id?: string) => {
    navigation.navigate(ARTICLE.screen, {
      userId: id,
    });
  };

  useEffect(() => {
    if (userList && userList.length > 0) {
      setUsersList(userList);
    }
  }, [userList]);

  useLayoutEffect(() => {
    if (userList && userList.length === 0) {
      dispatch(userActions.fetchUsers());
    }

    return () => {
      setUsersList([]);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={usersList}
        renderItem={({item}) => (
          <Card
            id={item.id}
            name={item.name}
            avatar={item.avatar}
            title={item.title}
            onPress={navigateToArticle}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default UserScreen;
