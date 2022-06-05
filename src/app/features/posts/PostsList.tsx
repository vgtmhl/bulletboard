import { useAppSelector } from '../../store';
import { selectAllPosts } from './postsSlice'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {
    const posts = useAppSelector(selectAllPosts);

    return (
        <section>
            <h2>Posts</h2>
            {posts.map(({ id, title, content, userId, date }) => (
                <article key={id}>

                    <h3>{title}</h3>
                    <p>{content}</p>

                    <p className='postCredit'>
                        <PostAuthor userId={userId} />
                        <TimeAgo timestamp={date} />
                    </p>
                </article>
            ))}
        </section>
    )
}

export default PostsList