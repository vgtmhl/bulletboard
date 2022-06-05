import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = [
    { id: '1', title: 'Learning Redux toolkit', content: "I've heard good things about Redux Toolkit" },
    { id: '2', title: 'Getting started with Redux', content: "I've gotten to know the basics of Redux" },
    { id: '3', title: 'Redux in plain english', content: "I've translated Redux to English" },
    { id: '4', title: 'Redux Toolkit in plain english', content: "I've translated Redux Toolkit to English" },
    { id: '5', title: 'Redux in Japanese', content: "I've translated Redux to Japanese" },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

/** Custom selectors */
export const selectAllPosts = (state: RootState) => state.posts ?? [];

export default postsSlice.reducer