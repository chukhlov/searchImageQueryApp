import React from 'react';
import {View, TextInput} from 'react-native';
import {useDebouncedCallback} from 'use-debounce';
import {useDispatch} from 'react-redux';
import {getImages} from '../../redux/slices/images/thunk';
import {onSearch} from '../../redux/slices/images';
import styles from './styles';
import {AppDispatch} from '../../redux/store';

const ImageSearch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const debounceSearch = useDebouncedCallback((text: string) => {
    dispatch(onSearch(text));
    dispatch(getImages());
  }, 700);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={debounceSearch}
        placeholder={'Search'}
        placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
      />
    </View>
  );
};

export default ImageSearch;
