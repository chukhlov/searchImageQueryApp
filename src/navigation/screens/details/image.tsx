import React, { FC, useCallback, useMemo, useState } from "react";
import {Image, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import { showMessage } from "react-native-flash-message";

type IImageProps = {
  uri: string;
};

const DetailScreenImage: FC<IImageProps> = ({uri}) => {
  const [loading, setLoading] = useState(true);

  const disableLoader = useCallback(() => {
    setLoading(false);
  }, []);

  const showError = useCallback(() => {
    setLoading(false);
    showMessage({
      message: 'Can not load image',
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
    <View>
      <Image source={{uri}} style={styles.image} onLoad={disableLoader} onError={showError} />
      {loader}
    </View>
  );
};

export default DetailScreenImage;
