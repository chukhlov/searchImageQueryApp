import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type IReactionsProps = {
  likes: number;
  comments: number;
  downloads: number;
};

const ImageReactions: FC<IReactionsProps> = ({likes, comments, downloads}) => {
  return (
    <View
      style={[styles.row, styles.imageDescriptions, styles.positionBottom]}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.white]}>Likes:</Text>
        <Text style={[styles.text, styles.title, styles.white]}>{likes}</Text>
      </View>

      <View style={[styles.row, styles.spaceLeft]}>
        <Text style={[styles.text, styles.white]}>Comments:</Text>
        <Text style={[styles.text, styles.title, styles.white]}>{comments}</Text>
      </View>

      <View style={[styles.row, styles.spaceLeft]}>
        <Text style={[styles.text, styles.white]}>Downloads:</Text>
        <Text style={[styles.text, styles.title, styles.white]}>{downloads}</Text>
      </View>
    </View>
  );
};

export default ImageReactions;
