type CardProps = {
  id: string;
  userId?: string;
  name: string;
  avatar?: string;
  title?: string;
  likes?: string[];
  date?: Date;
  articleAuthor?: string;
  onPress: (id?: string, articleId?: string) => void;
};
