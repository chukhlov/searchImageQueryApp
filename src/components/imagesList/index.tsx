import React, {useCallback, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useDebouncedCallback} from 'use-debounce';
import EmptyList from './EmptyList';
import {AppDispatch, RootState} from '../../redux/store';
import ListItem from './listItem';
import {IImageProps} from '../../interfaces/image';
import {getImages} from '../../redux/slices/images/thunk';
import styles from './styles';

const ImagesList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.images.data);
  const hasMore = useSelector((state: RootState) => state.images.hasMore);

  const fetchImages = useCallback(() => {
    dispatch(getImages());
  }, [dispatch]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const renderItem = useCallback(
    ({item}: {item: IImageProps}) => <ListItem {...item} />,
    [],
  );

  const keyExtractor = useCallback((item: IImageProps) => String(item.id), []);

  const loadMore = useDebouncedCallback(() => {
    if (!hasMore) {
      return;
    }

    fetchImages();
  }, 250);

  return (
    <FlatList
      contentContainerStyle={styles.grow}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      onEndReached={loadMore}
      ListEmptyComponent={EmptyList}
    />
  );
};

export default ImagesList;
