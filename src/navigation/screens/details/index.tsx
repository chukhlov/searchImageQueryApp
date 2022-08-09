import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import Loader from '../../../components/loader';
import ProgressiveImage from '../../../components/progressiveImage';
import Resolutions from './resolutions';
import DetailScreenUser from './user';
import DetailScreenTags from './tags';
import ImageReactions from './reactions';
import {DetailsScreenRouteProp} from '../../../interfaces/navigation';
import styles from './styles';

const DetailScreen = () => {
  const {
    params: {id},
  } = useRoute<DetailsScreenRouteProp>();

  const details = useSelector((state: RootState) =>
    state.images.data.find(item => item.id === id),
  );

  if (!details) {
    return <Loader show />;
  }

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView>
        <View>
          <ProgressiveImage
            uri={details.webformatURL}
            imageStyles={styles.image}
          />
          <Resolutions
            width={details.imageWidth}
            height={details.imageHeight}
          />
          <ImageReactions
            likes={details.likes}
            comments={details.comments}
            downloads={details.downloads}
          />
        </View>
        <View style={[styles.flex, styles.container]}>
          <DetailScreenUser
            userImage={details.userImageURL}
            userName={details.user}
          />

          <DetailScreenTags tags={details.tags} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
