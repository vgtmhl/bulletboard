import { useAppSelector } from '../../store';
import { selectAllPosts } from './postsSlice'

const PostsList = () => {
    const posts = useAppSelector(selectAllPosts);

    return (
        <section>
            <h2>Posts</h2>
            {posts.map(({ id, title, content }) => (
                <article key={id}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </article>
            ))}
        </section>
    )
}

export default PostsList