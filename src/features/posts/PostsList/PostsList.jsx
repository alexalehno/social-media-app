import { useGetPostsQuery } from '../../api/apiSlice';
import { useState } from 'react';
import { PostExcerpt } from '../PostExcerpt/PostExcerpt';
import { Spinner } from '../../../components/Spinner/Spinner';
import { RadioGroup } from '../../../components/RadioGroup/RadioGroup';
import { Pagination } from '../../../components/Pagination/Pagination';

const ITEMS_PER_PAGE = '5';

const getPostsPerPageOptions = (totalCount) => [
  { value: ITEMS_PER_PAGE, title: ITEMS_PER_PAGE },
  { value: '10', title: '10' },
  { value: '20', title: '20' },
  { value: String(totalCount), title: 'All' },
];

export const PostsList = () => {
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isFetching } = useGetPostsQuery({
    limit: Number(itemsPerPage),  
    page: currentPage
  });

  const handleLimitChange = (newLimit) => {
    setItemsPerPage(newLimit);
    setCurrentPage(1);
  };

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }  
  
  const { posts, totalCount } = data;
  const totalPages = Math.ceil(totalCount/Number(itemsPerPage));
  const postsPerPageOptions = getPostsPerPageOptions(totalCount);

  return (
    <section className='container'>
      <RadioGroup 
        title='Number of posts'
        name='posts'
        options={postsPerPageOptions}
        defaultValue={ITEMS_PER_PAGE}
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
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}