import { useGetPostsQuery, useGetUsersQuery } from '../../api/apiSlice';
import { PostExcerpt } from '../PostExcerpt/PostExcerpt';

export const PostsList = () => {
  const { data: posts = [] } = useGetPostsQuery();
  const { data: users = [] } = useGetUsersQuery();

  return (
    <section className='container'>
      <h2>Posts</h2>
      {
        posts.map(post => (
          <PostExcerpt post={post} users={users} key={post.id}/>
        ))
      }
    </section>
  );
}