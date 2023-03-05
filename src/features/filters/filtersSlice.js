import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
    sortText: '',
    filterText: '',
};

// creating filters slice here
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        sorted: (state, action) => {
            state.sortText = action.payload;
        },
        filtered: (state, action) => {
            state.filterText = action.payload;
        }
    },
});

export default filtersSlice.reducer;
export const { sorted, filtered } = filtersSlice.actions;