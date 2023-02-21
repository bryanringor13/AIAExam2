import {Route} from '@react-navigation/native';

type ArticleScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Articles'
>;

type ArticleScreenProps = {
  navigation: ArticleScreenNavigationProp;
  route: Route;
};
