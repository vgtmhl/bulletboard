import { createSlice, nanoid } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = [
    { id: '1', title: 'Learning Redux toolkit', content: "I've heard good things about Redux Toolkit" },
    { id: '3', title: 'Redux in plain english', content: "I've translated Redux to English" },
    { id: '5', title: 'Redux in Japanese', content: "I've translated Redux to Japanese" },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            /** Type "any" here because honestly I have no idea wtf TS is complaining about */
            prepare(title: string, content: string): any {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content
                    }
                }
            }
        },
    }
})

/** Selectors */
export const selectAllPosts = (state: RootState) => state.posts ?? [];

/** Actions */
export const { postAdded } = postsSlice.actions;

/** Reducers */
export default postsSlice.reducer