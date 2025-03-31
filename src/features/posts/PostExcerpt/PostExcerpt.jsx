import classes from './PostExcerpt.module.scss';
import { Link } from 'react-router-dom';
import { PostAuthor } from '../PostAuthor/PostAuthor';

export const PostExcerpt = ({ post }) => {
  return (
    <article>
      <Link className={classes.postExcerpt} to={`/posts/${post.id}`}>
        <h3>{post.id}. {post.title}</h3>
        <p>{post.body.substring(0, 70)}</p>
        <PostAuthor userId={post.userId} />
      </Link>
    </article>
  )
}
