import {createAsyncThunk} from '@reduxjs/toolkit';
import {searchImages} from '../../../api/imagesApi';
import {RootState} from '../../store';

export const getImages = createAsyncThunk(
  'images/searchImages',
  async (props, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const page = state.images.page;
    const query = state.images.searchText;

    return searchImages({
      page,
      query,
    });
  },
);
