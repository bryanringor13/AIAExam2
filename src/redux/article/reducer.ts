import {createReducer} from '@reduxjs/toolkit';
import update from 'immutability-helper';
import articleAction from './actions';

const initialState: ArticleState = {
  list: [],
};

export default createReducer(initialState, builder => {
  builder.addCase(articleAction.saveArticles, (state, action) => {
    console.log('Articles: saved!');
    // Save and Update list state with payload data from api
    return update(state, {list: {$set: action.payload.articles}});
  });

  builder.addCase(articleAction.updateArticleLikes, (state, action) => {
    const {userId, articleId} = action.payload; // extract userId and articleId from payload object
    let currentList = state.list; // get lists from current article state
    const articleIndex = currentList.findIndex(list => list.id === articleId); // get index of an article
    let articlesLikes = currentList[articleIndex].likes; // get the list of likes in article
    const userIdIndex = articlesLikes.findIndex(id => id === userId); // get the index of userId if existing in the list of likes

    // check if userid in article likes is included
    if (userIdIndex >= 0) {
      // removing of item based on userId index in array list
      articlesLikes.splice(userIdIndex, 1);
    } else {
      // adding of item in array list
      articlesLikes.push(userId);
    }

    // update the changes article's likes in current article
    currentList[articleIndex].likes = articlesLikes;
    return update(state, {list: {$set: currentList}});
  });
});
