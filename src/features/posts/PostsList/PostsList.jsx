import classes from './PostsList.module.scss';
import { useGetPostsQuery } from '../../api/apiSlice';

export const PostsList = () => {
  const { data: posts = [] } = useGetPostsQuery();
 
  return (
    <section className='container'>
      <h2 className={classes.postsTitle}>Posts</h2>

      {
        posts.map(post => (
          <article className={classes.postExcerpt} key={post.id}>
            <h3>{post.title}</h3>
            <p className={classes.postBody}>{post.body.substring(0, 100)}</p>
          </article>
        ))
      }
    </section>
  );
}