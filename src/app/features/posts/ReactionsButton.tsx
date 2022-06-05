import { useAppDispatch } from '../../store'
import { Post, ReactionType } from './postModels';
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }: { post: Post }) => {
    const dispatch = useAppDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {

        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name as ReactionType]}
            </button>
        )
    })

    return <div>{reactionButtons}</div>
}
export default ReactionButtons