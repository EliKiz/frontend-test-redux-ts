import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ListService from "../../service/ListService";
import { RootState } from "../../store/store";
import { InitialStateTypes} from "../../types";


const initialState:InitialStateTypes = { 
    filtersList: [],
    activeFilter: "all",
    status: "idle",
    inputSearch: ""
};

export const fetchFilters = createAsyncThunk(
    "filters/fetchFilters",
    async () =>  {
        const {requestFilters} = ListService();
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
            state.inputSearch = action.payload;
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
    changeSearch
} = actions;

export const selectFiltersList = (state: RootState) => state.filtersList.filtersList;
export const selectActiveFilter = (state: RootState) => state.filtersList.activeFilter;
export const selectInput = (state: RootState) => state.filtersList.inputSearch;

export default filtersSlice.reducer;