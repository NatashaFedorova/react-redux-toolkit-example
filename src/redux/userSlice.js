import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
    a: 5,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

const persistConfig = {
  key: 'user',
  storage,
  blacklist: ['a'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);

export const { logIn, logOut } = userSlice.actions;
