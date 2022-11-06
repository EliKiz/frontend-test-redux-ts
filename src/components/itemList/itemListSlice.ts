import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import type {Card} from "../../types";
import { InitialStateTypes} from "../../types";

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
        const response = await ( fetch("http://localhost:3001/cards"));
        return response.json();
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
        // filteredCards: (state, action) => { 
        //     state.cardsList = state.cardsList.filter((card) => { 
        //         if (state.cardsList.length === 0) {
        //             return card;
        //         }
        //         return card.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase());
        //     });
        // }

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
    changeDealsClass
} = actions;

export const selectCardsList = (state: RootState) => state.cardsList.cardsList;
export const selectStatusList = (state: RootState) => state.cardsList.status;
// export const selectActiveFilter = (state: RootState) => state.filtersList.activeFilter;
// export const selectInput = (state: RootState) => state.filtersList.inputSearch;

export default cardsSlice.reducer;