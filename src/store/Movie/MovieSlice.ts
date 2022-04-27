import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_STATE } from "constants/store";

const initialState = {
    ...DEFAULT_STATE,
    list: [],
    detail: [],
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getListMoviesRequest: (state) => {
            state.loading = true;
        },
        
        getListMoviesSuccess: (state, action) => {
            state.loading = false;
            let listMovies = state.list.concat(action.payload);
            state.list = listMovies;
            state.status = true;
        },

        getListMoviesFail: (state, action) => {
            state.error = action.payload;
            state.status = false;
        },

        getDetailMovieRequest: (state) => {
            state.loading = true;
        },

        getDetailMovieSuccess: (state, action) => {
            state.loading = false;
            state.detail = action.payload;
        },

        getDetailMovieFail: (state, action) => {
            state.status = false;
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    getListMoviesRequest,
    getListMoviesSuccess,
    getListMoviesFail,
    getDetailMovieRequest,
    getDetailMovieSuccess,
    getDetailMovieFail,
} = movieSlice.actions;

export default movieSlice.reducer;