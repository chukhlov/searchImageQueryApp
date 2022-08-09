import React, {useCallback} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState, AppDispatch} from '../../redux/store';
import {getImages} from '../../redux/slices/images/thunk';
import styles from './styles';

const ReloadButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  const hasData = useSelector(
    (state: RootState) => state.images.data.length > 0,
  );
  const loadError = useSelector((state: RootState) => state.images.loadError);

  const reload = useCallback(() => {
    dispatch(getImages());
  }, []);

  if (hasData || !loadError) {
    return null;
  }

  return (
    <TouchableOpacity style={styles.reloadButton} onPress={reload}>
      <Text style={styles.reloadButtonText}>Try again</Text>
    </TouchableOpacity>
  );
};

export default ReloadButton;
