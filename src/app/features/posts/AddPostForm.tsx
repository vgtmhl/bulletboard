import React, { useState } from "react";
import { useAppDispatch } from "../../store";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const dispatch = useAppDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)

    const onSavePostClick = () => {
        if (title && content) { dispatch(postAdded(title, content)) }
        setTitle('')
        setContent('')
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSavePostClick}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm