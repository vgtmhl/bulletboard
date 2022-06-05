import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Post } from "./postModels";

const initialState = [
    { id: '1', title: 'Learning Redux toolkit', content: "I've heard good things about Redux Toolkit" },
    { id: '3', title: 'Redux in plain english', content: "I've translated Redux to English" },
    { id: '5', title: 'Redux in Japanese', content: "I've translated Redux to Japanese" },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        /**
         * If you need to customize the creation of the payload value of an action creator by means of a prepare callback, 
         * the value of the appropriate field of the reducers argument object should be an object instead of a function. 
         * This object must contain two properties: reducer and prepare. 
         * 
         * The value of the reducer field should be the case reducer function.
         * The value of the prepare field should be the prepare callback function:
         */
        postAdded: {
            reducer(state, action: PayloadAction<Post>) {
                state.push(action.payload)
            },
            prepare(title: string, content: string, userId: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
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