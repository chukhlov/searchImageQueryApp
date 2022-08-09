import {configureStore} from '@reduxjs/toolkit';
import imagesSlide from './slices/images';

export const store = configureStore({
  reducer: {
    images: imagesSlide,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
