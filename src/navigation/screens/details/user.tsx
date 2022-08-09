import React, {FC} from 'react';
import {Text, View} from 'react-native';
import ProgressiveImage from '../../../components/progressiveImage';
import styles from './styles';

type IUserProps = {
  userImage: string;
  userName: string;
};

const DetailScreenUser: FC<IUserProps> = ({userImage, userName}) => {
  return (
    <View style={[styles.row, styles.spaceTop]}>
      <View>
        <ProgressiveImage uri={userImage} imageStyles={styles.avatar} />
      </View>
      <Text style={[styles.text, styles.title, styles.spaceLeft]}>
        {userName}
      </Text>
    </View>
  );
};

export default DetailScreenUser;
