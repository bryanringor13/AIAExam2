import {createAction} from '@reduxjs/toolkit';
import {ARTICLE} from './constant';

const fetchArticles = createAction(ARTICLE.actions.fecthArticles);
const saveArticles = createAction<SaveArticle>(ARTICLE.actions.saveArticles);
const updateArticleLikes = createAction<UpdateArticleLikes>(
  ARTICLE.actions.updateArticleLike,
);

const articleAction = {
  fetchArticles,
  saveArticles,
  updateArticleLikes,
};

export default articleAction;
