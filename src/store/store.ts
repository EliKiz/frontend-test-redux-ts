import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import filtersListReducer from "../components/filters/filtersSlice";
import cardsReducer from "../components/itemList/itemListSlice";
import { apiSlice } from "../api/apiSlice";


export const store = configureStore({
    reducer: {
        filtersList: filtersListReducer,
        cardsList: cardsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
