import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import notesReducer from "./slices/notesSlice";
import postsReducer from "./slices/postsSlice";


export const store = configureStore({
    reducer: {
        counterValue: counterReducer,
        posts: postsReducer,
        noteData: notesReducer
    }
})