import { useGetPostsQuery } from '../../api/apiSlice';
import { PostExcerpt } from '../PostExcerpt/PostExcerpt';
import { Spinner } from '../../../components/Spinner/Spinner';

export const PostsList = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }  

  return (
    <section className='container'>
      <h2>Posts</h2>
      {
        posts.map(post => (
          <PostExcerpt 
            post={post} 
            key={post.id}
          />
        ))
      }
    </section>
  );
}