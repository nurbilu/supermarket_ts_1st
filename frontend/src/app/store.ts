import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import registerReducer from '../features/registerSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
