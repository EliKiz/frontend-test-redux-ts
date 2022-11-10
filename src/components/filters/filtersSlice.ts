import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {requestFilters} from "../../service/ListService";
import { RootState } from "../../store/store";
import { InitialStateTypes} from "../../types";


const initialState:InitialStateTypes = { 
    filtersList: [],
    activeFilter: "all",
    status: "idle",
    filterSearch: "",
    headerSearch: ""
};

export const fetchFilters = createAsyncThunk(
    "filters/fetchFilters",
    async () =>  {
        return await requestFilters();
    }
);

const filtersSlice = createSlice({ 
    name: "filters",
    initialState,
    reducers: { 
        changeActiveClass: (state, action) => { 
            state.activeFilter = action.payload;
        },
        changeSearch: (state, action) => { 
            state.filterSearch = action.payload;   
        },
        changeHeaderSearch: (state, action) => { 
            state.headerSearch = action.payload;
        }
    },
    extraReducers : (builder) => { 
        builder
            .addCase(fetchFilters.pending, (state) => { 
                state.status = "loading";
            })
            .addCase(fetchFilters.fulfilled, (state, action) => { 
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
    changeActiveClass,
    changeSearch,
    changeHeaderSearch
} = actions;

export const selectFiltersList = (state: RootState) => state.filtersList.filtersList;
export const selectActiveFilter = (state: RootState) => state.filtersList.activeFilter;
export const selectStatusFilter = (state: RootState) => state.filtersList.status;
export const selectInputFilter = (state: RootState) => state.filtersList.filterSearch;
export const selectInputHeader = (state: RootState) => state.filtersList.headerSearch;

export default filtersSlice.reducer;