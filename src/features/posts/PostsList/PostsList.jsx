import classes from './PostsList.module.scss';
import { useGetPostsQuery, useGetUsersQuery } from '../../api/apiSlice';
import { PostAuthor } from '../PostAuthor/PostAuthor';

export const PostsList = () => {
  const { data: posts = [] } = useGetPostsQuery();
  const { data: users = [] } = useGetUsersQuery();

  return (
    <section className='container'>
      <h2 className={classes.postsTitle}>Posts</h2>

      {
        posts.map(post => (
          <article className={classes.postExcerpt} key={post.id}>
            <h3>{post.title}</h3>
            <p className={classes.postBody}>{post.body.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} users={users}/>
          </article>
        ))
      }
    </section>
  );
}