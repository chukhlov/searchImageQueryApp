import {API_URL, API_KEY} from '@env';
import {ISearchImages} from '../interfaces/imagesApi';
import {urlSearchQuery} from '../utils/query';

export const searchImages = ({query, page, id}: ISearchImages = {page: 1}) => {
  const queryParams = urlSearchQuery({
    q: query,
    key: API_KEY,
    id,
    page: page.toString(),
    image_type: 'photo',
  });

  const url = `${API_URL}?${queryParams.toString()}`;

  return fetch(url).then(response => response.json());
};
