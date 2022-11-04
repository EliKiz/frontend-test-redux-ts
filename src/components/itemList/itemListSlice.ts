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
        return await response.json();
    }
);

const cardsSlice = createSlice({ 
    name: "cards",
    initialState,
    reducers: { 
        changeActiveClass: (state, action) => { 
            // console.log(action.payload);
            state.cardsList.favorite = action.payload;
        },
        // changeSearch: (state, action) => { 
        //     state.inputSearch = action.payload;
        // }
    },
    extraReducers : (builder) => { 
        builder
            .addCase(fetchFilters.pending, (state) => { 
                state.status = "loading";
            })
            .addCase(fetchFilters.fulfilled, (state, action) => { 
                state.cardsList = action.payload;
                state.status = "idle";
            })
            .addCase(fetchFilters.rejected, (state) => { 
                state.status = "error";
            });
    }
});

const {actions} = cardsSlice;

export const {     
    changeActiveClass,
    // changeSearch
} = actions;

// export const selectFiltersList = (state: RootState) => state..filtersList;
// export const selectActiveFilter = (state: RootState) => state.filtersList.activeFilter;
// export const selectInput = (state: RootState) => state.filtersList.inputSearch;

export default cardsSlice.reducer;