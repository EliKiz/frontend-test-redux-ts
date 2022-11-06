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

export const fetchFilters = createAsyncThunk(
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
            console.log("state.cardsList RED", state.cardsList );
            state.cardsList = state.cardsList.map((item) => { 
                if(item.id !== action.payload) { 
                    return item;
                }
                return {...item, favorite: !item.favorite};
            });
            // console.log(action.payload);
            // state.CardId = action.payload;
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
            .addCase(fetchFilters.pending, (state) => { 
                state.status = "loading";
            })
            .addCase(fetchFilters.fulfilled, (state, action) => { 
                state.cardsList = action.payload;
                console.log(action.payload);
                state.status = "idle";
            })
            .addCase(fetchFilters.rejected, (state) => { 
                state.status = "error";
            });
    }
});

const {actions} = cardsSlice;

export const {     
    changeFavoriteClass,
} = actions;

export const selectCardsList = (state: RootState) => state.cardsList.cardsList;
// export const selectActiveFilter = (state: RootState) => state.filtersList.activeFilter;
// export const selectInput = (state: RootState) => state.filtersList.inputSearch;

export default cardsSlice.reducer;