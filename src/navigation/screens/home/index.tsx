import React from 'react';
import {SafeAreaView} from 'react-native';
import ImageSearch from '../../../components/imageSearch';
import Loader from '../../../components/loader';
import ImagesList from '../../../components/imagesList';
import styles from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <ImageSearch />
      <ImagesList />
      <Loader />
    </SafeAreaView>
  );
};

export default HomeScreen;
