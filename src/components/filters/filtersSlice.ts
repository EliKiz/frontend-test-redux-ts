import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { InitialStateTypes} from "../../types";


const initialState:InitialStateTypes = { 
    filtersList: [],
    activeFilter: "all",
    status: "idle"
};

export const fetchFilters = createAsyncThunk(
    "filters/fetchFilters",
    async () =>  {
        const response = await fetch("http://localhost:3001/filters");
        return await response.json();
    }
);

const filtersSlice = createSlice({ 
    name: "filters",
    initialState,
    reducers: { 
        changeActiveClass: (state, action) => { 
            state.activeFilter = action.payload;
        }
    },
    extraReducers : (builder) => { 
        builder
            .addCase(fetchFilters.pending, (state) => { 
                state.status = "loading";
            })
            .addCase(fetchFilters.fulfilled, (state, action) => { 
                console.log("awda");
                state.filtersList = action.payload;
                state.status = "idle";
            })
            .addCase(fetchFilters.rejected, (state) => { 
                state.status = "error";
            });
    }
});

const {actions} = filtersSlice;

export const {     
    changeActiveClass
} = actions;

export const selectFiltersList = (state: RootState) => state.filtersList.filtersList;
export const selectActiveFilter = (state: RootState) => state.filtersList.activeFilter;

export default filtersSlice.reducer;