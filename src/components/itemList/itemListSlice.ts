import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { InitialStateTypes} from "../../types";


const initialState:any = { 
    cardsList: [],
    status: "idle",
};

export const fetchFilters = createAsyncThunk(
    "cards/fetchCards",
    async () =>  {
        const response = await fetch("http://localhost:3001/cards");
        return response.json();
    }
);

const cardsSlice = createSlice({ 
    name: "cards",
    initialState,
    reducers: { 
        changeFavoriteClass: (state, action) => { 
            // console.log(action.payload);
            console.log(state);
            state.cardsList.favorite = action.payload;
        },
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

export const selectCardsList = (state: RootState) => state.cardsList;
// export const selectActiveFilter = (state: RootState) => state.filtersList.activeFilter;
// export const selectInput = (state: RootState) => state.filtersList.inputSearch;

export default cardsSlice.reducer;