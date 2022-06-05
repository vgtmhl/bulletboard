import { useAppSelector } from '../../store';
import { selectAllPosts } from './postsSlice'
import ReactionButtons from './ReactionsButton';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {
    const posts = useAppSelector(selectAllPosts);
    const orderedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

    return (
        <section>
            <h2>Posts</h2>
            {orderedPosts.map((post) => (
                <article key={post.id}>

                    <h3>{post.title}</h3>
                    <p>{post.content}</p>

                    <p className='postCredit'>
                        <PostAuthor userId={post.userId} />
                        <TimeAgo timestamp={post.date} />
                    </p>

                    <ReactionButtons post={post} />
                </article>
            ))}
        </section>
    )
}

export default PostsList