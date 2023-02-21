import {ARTICLE} from '../../redux/article/constant';
import {USER} from '../../redux/user/constant';

type RootStackParamList = {
  [USER.screen]: undefined;
  [ARTICLE.screen]: {
    userId: string;
  };
};
