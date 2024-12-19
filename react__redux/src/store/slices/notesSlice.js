import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: []
}

export const notesSlice = createSlice({
    name: 'noteData',
    initialState,
    reducers: {
        setNote: (state, action) => {
            state.notes.push(action.payload);
        }
    }
})

export const { setNote } = notesSlice.actions;

export const useSelectNote = (state) => state.noteData.notes;

export default notesSlice.reducer;