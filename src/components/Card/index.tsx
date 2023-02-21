import {TouchableOpacity, View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import moment from 'moment';

const likesHandler = (
  likesDetails: string[],
  articleAuthor: string | undefined,
  userId: string | undefined,
  id: string,
  action: {
    (articleId?: string | undefined): void;
    (): void;
  },
) => {
  const liked = userId && likesDetails.includes(userId);
  const ownArticle = articleAuthor === userId;
  const bgColor = ownArticle ? '#d4d6d8' : '#1a70eb';
  const likeText = liked ? 'Liked' : 'Like';
  return (
    <View style={styles.likeContainer}>
      <TouchableOpacity onPress={() => action(id)} disabled={ownArticle}>
        <View
          style={[
            styles.likeBox,
            {
              backgroundColor: bgColor,
            },
          ]}>
          <Text style={styles.like}>{likeText}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.likeCounter}>
        <Text style={styles.counter}>{likesDetails.length}</Text>
      </View>
    </View>
  );
};

const Card = ({
  id,
  userId,
  articleAuthor,
  name,
  avatar,
  title,
  date,
  likes,
  onPress,
}: CardProps) => {
  const onPressAction = () => {
    if (id && onPress) {
      onPress(id);
    }
  };
  const cardHaveAction = !likes;

  return (
    <TouchableOpacity onPress={onPressAction} disabled={!cardHaveAction}>
      <View style={styles.item}>
        <View style={styles.avatar}>
          <Image
            source={{
              uri: avatar,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <View style={styles.description}>
            {name && <Text style={styles.name}>{name}</Text>}
            {title && <Text style={styles.title}>{title}</Text>}
            {date && (
              <Text style={styles.title}>
                {moment(date).format('MMMM DD, YYYY')}
              </Text>
            )}
          </View>

          {likes && likesHandler(likes, articleAuthor, userId, id, onPress)}
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Card;
