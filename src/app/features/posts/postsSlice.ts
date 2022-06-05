import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Post } from "./postModels";
import { sub } from "date-fns";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux toolkit',
        content: "I've heard good things about Redux Toolkit",
        userId: '1',
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: '3',
        title: 'Redux in plain english',
        content: "I've translated Redux to English",
        date: sub(new Date(), { minutes: 20 }).toISOString()
    },
    {
        id: '5',
        title: 'Redux in Japanese',
        content: "I've translated Redux to Japanese",
        userId: '0',
        date: sub(new Date(), { minutes: 30 }).toISOString()
    },
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
                        date: new Date().toISOString(),
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