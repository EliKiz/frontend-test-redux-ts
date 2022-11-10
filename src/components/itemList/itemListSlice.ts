import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {requestCards} from "../../service/ListService";
import { RootState } from "../../store/store";
import type {Card} from "../../types";

interface CardsInitial { 
    cardsList: Card[],
    status: "idle" | "loading" | "error",
    CardId: string
}

const initialState:CardsInitial = { 
    cardsList: [],
    status: "idle",
    CardId:  ""
};

export const fetchCards = createAsyncThunk(
    "cards/fetchCards",
    async () =>  {
        return await requestCards();
    }
);

const cardsSlice = createSlice({ 
    name: "cards",
    initialState,
    reducers: { 
        changeFavoriteClass: (state, action) => { 
            state.cardsList = state.cardsList.map((item) => { 
                if(item.id !== action.payload) { 
                    return item;
                }
                return {...item, favorite: !item.favorite};
            });
        },
        changeDealsClass: (state, action) => { 
            console.log(action.payload);
            state.cardsList = state.cardsList.map((item) => { 
                if(item.id !== action.payload) { 
                    return item;
                }
                return {...item, addedDeals: !item.addedDeals};
            });
        },
        changePayClass: (state, action) => { 
            state.cardsList = state.cardsList.map((item) => { 
                if(item.id !== action.payload) { 
                    return item;
                }
                return { ...item, payment: !item.payment};
            });
        }

    },
    extraReducers : (builder) => { 
        builder
            .addCase(fetchCards.pending, (state) => { 
                state.status = "loading";
            })
            .addCase(fetchCards.fulfilled, (state, action) => { 
                state.cardsList = action.payload;
                state.status = "idle";
            })
            .addCase(fetchCards.rejected, (state) => { 
                state.status = "error";
            });
    }
});

const {actions} = cardsSlice;

export const {     
    changeFavoriteClass,
    changeDealsClass,
    changePayClass
} = actions;

export const selectCardsList = (state: RootState) => state.cardsList.cardsList;
export const selectStatusList = (state: RootState) => state.cardsList.status;

export default cardsSlice.reducer;