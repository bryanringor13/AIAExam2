import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {USER} from '../../redux/user/constant';
import {ARTICLE} from '../../redux/article/constant';
import UserScreen from '../user';
import ArticleScreen from '../article';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  const userScreen = USER.screen as keyof RootStackParamList;
  const articleScreen = ARTICLE.screen as keyof RootStackParamList;

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={userScreen}>
        <RootStack.Screen
          name={userScreen}
          component={UserScreen}
          options={{title: userScreen}}
        />
        <RootStack.Screen
          name={articleScreen}
          component={ArticleScreen}
          options={{title: articleScreen}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
