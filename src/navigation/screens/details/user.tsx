import React, {FC, useCallback, useMemo, useState} from 'react';
import {Text, Image, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {showMessage} from 'react-native-flash-message';

type IUserProps = {
  userImage: string;
  userName: string;
};

const DetailScreenUser: FC<IUserProps> = ({userImage, userName}) => {
  const [loading, setLoading] = useState(true);

  const disableLoader = useCallback(() => {
    setLoading(false);
  }, []);

  const showError = useCallback(() => {
    setLoading(false);
    showMessage({
      message: 'Can not load user avatar',
      type: 'danger',
    });
  }, []);

  const loader = useMemo(() => {
    if (!loading) {
      return null;
    }

    return (
      <View style={styles.imageLoader}>
        <ActivityIndicator size={'large'} color={'green'} />
      </View>
    );
  }, [loading]);

  return (
    <View style={[styles.row, styles.spaceTop]}>
      <View>
        <Image
          source={{uri: userImage}}
          style={styles.avatar}
          onLoad={disableLoader}
          onError={showError}
        />
        {loader}
      </View>
      <Text style={[styles.text, styles.title, styles.spaceLeft]}>
        {userName}
      </Text>
    </View>
  );
};

export default DetailScreenUser;
