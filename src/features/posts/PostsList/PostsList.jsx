import { useGetPostsQuery } from '../../api/apiSlice';
import { useState } from 'react';
import { PostExcerpt } from '../PostExcerpt/PostExcerpt';
import { Spinner } from '../../../components/Spinner/Spinner';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { Pagination } from '../../../components/Pagination/Pagination';

export const PostsList = () => {
  const DEFAULT_NUMBER = '5';

  const [limit, setLimit] = useState(DEFAULT_NUMBER);
  const [page, setPage] = useState(1);

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  const { data, isLoading, isFetching } = useGetPostsQuery({limit, page});

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }  
  
  const { posts, totalCount } = data;
  
  const postsNum = [
    {value: DEFAULT_NUMBER, title: DEFAULT_NUMBER},
    {value: '10', title: '10'},
    {value: '20', title: '20'},
    {value: totalCount, title: 'All'},
  ]

  return (
    <section className='container'>
      <RadioGroup 
        title='Number of posts'
        name='posts'
        arr={postsNum}
        defaultValue={DEFAULT_NUMBER}
        fetchValue={handleLimitChange}
      />

      <h2>Posts</h2>
      {
        isFetching 
        ?
        <Spinner text='Loading...'/> 
        :
        posts.map(post => (
          <PostExcerpt 
            post={post} 
            key={post.id}
          />
        ))
      }

      <Pagination 
        limit={limit}
        page={page}
        totalCount={totalCount}
        onPageChange={setPage}
      />
    </section>
  );
}