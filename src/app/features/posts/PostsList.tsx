import { useAppSelector } from '../../store';
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor';

const PostsList = () => {
    const posts = useAppSelector(selectAllPosts);

    return (
        <section>
            <h2>Posts</h2>
            {posts.map(({ id, title, content, userId }) => (
                <article key={id}>

                    <h3>{title}</h3>
                    <p>{content}</p>

                    <p className='postCredit'>
                        <PostAuthor userId={userId} />
                    </p>
                </article>
            ))}
        </section>
    )
}

export default PostsList