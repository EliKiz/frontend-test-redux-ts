import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import filtersListReducer from "../components/filters/filtersSlice";
import cardsReducer from "../components/itemList/itemListSlice";


export const store = configureStore({
    reducer: {
        filtersList: filtersListReducer,
        cardsList: cardsReducer
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
