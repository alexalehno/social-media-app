import { useGetPostsQuery, useGetUsersQuery } from '../../api/apiSlice';
import { PostExcerpt } from '../PostExcerpt/PostExcerpt';
import { Spinner } from '../../../components/Spinner/Spinner';

export const PostsList = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();
  const { data: users = [] } = useGetUsersQuery();

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }  

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