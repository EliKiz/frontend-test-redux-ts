import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {Card} from "../types";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001"}),
    endpoints: builder => ({ 
        getCards: builder.query<void, void>({ 
            query: () => "/cards"
        })
    })
});

export const {useGetCardsQuery} = apiSlice;