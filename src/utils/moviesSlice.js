import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topMovies: null,
        upcomingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopMovies: (state, action) => {
            state.topMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies,addPopularMovies,addTopMovies, addUpcomingMovies, addTrailerVideo} = moviesSlice.actions; 
export default moviesSlice.reducer;