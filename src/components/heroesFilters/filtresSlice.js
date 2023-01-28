import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    filtresLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all'
}

export const fetchedFiltres = createAsyncThunk(
    'filters/fetchedFiltres',
    () => {
        const {request} = useHttp(); 
        return request("http://localhost:3001/filters")
    }
)

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        // filtresFetching: state => {state.filtresLoadingStatus = 'loading'},
        // filtresFetched: (state, aciton) => {
        //     state.filters = aciton.payload;
        //     state.filtresLoadingStatus = 'idle'
        // },
        // filtresFetchingError: state => {state.filtresLoadingStatus = 'error'},
        activeFiltredChanged: (state, aciton) => {state.activeFilter = aciton.payload}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchedFiltres.pending, state => {state.filtresLoadingStatus = 'loading'})
            .addCase(fetchedFiltres.fulfilled, (state, aciton) => {
                state.filters = aciton.payload;
                state.filtresLoadingStatus = 'idle'
            })
            .addCase(fetchedFiltres.rejected, state => {state.filtresLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = filtersSlice;

export default reducer;

export const {
    filtresFetching, 
    filtresFetched,
    filtresFetchingError,
    activeFiltredChanged
} = actions;