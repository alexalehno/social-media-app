import classes from './PostExcerpt.module.scss';
import { Link } from 'react-router-dom';
import { PostAuthor } from '../PostAuthor/PostAuthor';

export const PostExcerpt = ({ post, users }) => {
  return (
    <article>
      <Link className={classes.postExcerpt} to={``}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <PostAuthor userId={post.userId} users={users}/>
      </Link>
    </article>
  )
}
