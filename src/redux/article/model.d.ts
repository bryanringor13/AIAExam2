type Article = {
  id: string;
  userId: string;
  title: string;
  publicationDate: Date;
  thumbnailImage?: string;
  likes: string[];
};

type ArticleState = {
  list: Article[];
};

type SaveArticle = {
  articles: Article[];
};

type UpdateArticleLikes = {
  userId: string;
  articleId: string;
};
