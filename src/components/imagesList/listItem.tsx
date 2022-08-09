import React, {FC, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ProgressiveImage from '../progressiveImage';
import {DetailsScreenNavigationProp} from '../../interfaces/navigation';
import {IImageProps} from '../../interfaces/image';
import styles from './styles';

const ListItem: FC<IImageProps> = props => {
  const {
    previewURL,
    previewWidth,
    previewHeight,
    views,
    downloads,
    collections,
    likes,
    comments,
    id,
  } = props;

  const {navigate} = useNavigation<DetailsScreenNavigationProp>();

  const openDetailScreen = useCallback(() => {
    navigate('Details', {id});
  }, [id, navigate]);

  return (
    <TouchableOpacity onPress={openDetailScreen} style={styles.item}>
      <ProgressiveImage
        uri={previewURL}
        imageStyles={{width: previewWidth, height: previewHeight}}
      />
      <View>
        <Text>Views: {views}</Text>
        <Text>Downloads: {downloads}</Text>
        <Text>Collections: {collections}</Text>
        <Text>Likes: {likes}</Text>
        <Text>Comments: {comments}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
