import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notesByChatId: {}
};

export const chatSlice = createSlice({
    name: "pocketchat",
    initialState,
    reducers: {
        addChat: (state, action) => {
            const { chatId, note } = action.payload;
            if (!state.notesByChatId[chatId]) {
                state.notesByChatId[chatId] = [];
            }
            state.notesByChatId[chatId].push(note);
        }
    }
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
