import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type IResolutionsProps = {
  width: number;
  height: number;
};

const ImageResolutions: FC<IResolutionsProps> = ({width, height}) => {
  return (
    <View style={[styles.row, styles.imageDescriptions, styles.positionTop]}>
      <View style={styles.row}>
        <Text style={[styles.text, styles.white]}>Image Width:</Text>
        <Text style={[styles.text, styles.title, styles.white]}>{width}</Text>
        <Text style={[styles.text, styles.white]}>px;</Text>
      </View>

      <View style={[styles.row, styles.spaceLeft]}>
        <Text style={[styles.text, styles.white]}>Image Height:</Text>
        <Text style={[styles.text, styles.title, styles.white]}>{height}</Text>
        <Text style={[styles.text, styles.white]}>px;</Text>
      </View>
    </View>
  );
};

export default ImageResolutions;
