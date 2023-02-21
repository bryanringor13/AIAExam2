/* eslint-disable react-hooks/exhaustive-deps */
import {SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import Card from '../../components/Card';
import {useDispatch, useSelector} from 'react-redux';
import articleAction from '../../redux/article/actions';
import {ArticleScreenProps} from './types';

const ArticleScreen = ({route}: ArticleScreenProps) => {
  const {userId} = route.params;
  const {list} = useSelector((state: ReduxState) => state.article);
  const {userList} = useSelector((state: ReduxState) => state.user);
  const dispatch = useDispatch();
  const [articleList, setArticleList] = useState<any>([]);

  const likesHandler = (articleId?: string) => {
    if (userId && articleId) {
      dispatch(articleAction.updateArticleLikes({userId, articleId}));
    }
  };

  useEffect(() => {
    if (list && userId) {
      let articleUserList: Article[] = [];
      const currentUser = userList[0];
      if (userId === currentUser) {
        articleUserList = list.filter(item => item.userId === userId);
      } else {
        articleUserList = list.filter(
          item => item.userId === userId || item.userId === currentUser.id,
        );
      }

      setArticleList(articleUserList);
    }
  }, [list, userId]);

  useEffect(() => {
    if (list.length === 0) {
      dispatch(articleAction.fetchArticles());
    }

    return () => {
      setArticleList([]);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articleList}
        renderItem={({item}) => (
          <Card
            id={item.id}
            articleAuthor={item.userId}
            name={item.title}
            avatar={item.thumbnailImage}
            likes={item.likes}
            date={item.publicationDate}
            onPress={likesHandler}
            {...{userId}}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default ArticleScreen;
