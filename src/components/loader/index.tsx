import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import styles from './styles';

type ILoaderProps = {
  show?: boolean;
};

const Loader: FC<ILoaderProps> = ({show}) => {
  const loading = useSelector((state: RootState) => state.images.loading);

  if (!show && !loading) {
    return null;
  }

  return (
    <View style={styles.loaderView}>
      <ActivityIndicator color={'lightblue'} size={'large'} />
    </View>
  );
};

export default Loader;
