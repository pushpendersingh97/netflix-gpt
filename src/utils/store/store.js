import { configureStore } from "@reduxjs/toolkit";

import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./movies"

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        movies: moviesSliceReducer
    }
})