import {createSlice} from '@reduxjs/toolkit';
import {showMessage} from 'react-native-flash-message';
import {IImageProps} from '../../../interfaces/image';
import {getImages} from './thunk';

export interface IStateProps {
  data: IImageProps[];
  loading: boolean;
  searchText: string;
  page: number;
  hasMore: boolean;
  loadError: boolean;
}

const initialState: IStateProps = {
  data: [],
  page: 1,
  searchText: '',
  hasMore: true,
  loading: false,
  loadError: false,
};

const ImagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    onSearch: (state, action) => {
      state.searchText = action.payload;
      state.data = [];
      state.page = 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(getImages.pending, state => {
      state.loading = true;
      state.loadError = false;
    });

    builder.addCase(getImages.fulfilled, (state, action) => {
      state.data = [...state.data, ...action?.payload?.hits];
      state.hasMore = action.payload?.hits?.length > 0;
      state.page = state.page + 1;
      state.loading = false;
    });

    builder.addCase(getImages.rejected, (state, action) => {
      showMessage({
        description: 'Request failed!',
        message: action.error.message || '',
        type: 'danger',
      });
      state.loading = false;
      state.loadError = true;
    });
  },
});

export const {onSearch} = ImagesSlice.actions;

export default ImagesSlice.reducer;
