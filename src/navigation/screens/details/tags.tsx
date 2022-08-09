import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const DetailScreenTags = ({tags}: {tags: string}) => {
  const imageTags = useMemo(() => {
    if (!tags) {
      return null;
    }

    return tags
      .split(',')
      .map(tag => `#${tag.trim()}`)
      .join(' ');
  }, [tags]);

  return (
    <View style={[styles.row, styles.spaceTop]}>
      <Text style={styles.text}>Tags:</Text>
      <Text style={[styles.text, styles.title, styles.green]}>
        {imageTags}
      </Text>
    </View>
  );
};

export default DetailScreenTags;
