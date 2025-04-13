import { selectAllUsers, useGetUsersQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { UsersItem } from '../UsersItem/UsersItem';
import { Spinner } from '../../../components/Spinner/Spinner';
import { Pagination } from '../../../components/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';

const ITEMS_PER_PAGE = 4;

export const UsersList = () => {
  const { isLoading } = useGetUsersQuery();
  const users = useSelector(selectAllUsers);

  const { currentPage, totalPages, currentItems, goToPage } = usePagination(users, ITEMS_PER_PAGE);

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }  
   
  return (
    <section className='container'>
      <h2>Users</h2>
      <ul>
        {
          currentItems.map(user => (
            <UsersItem 
              key={user.id} 
              name={user.name} 
              city={user.address.city}
              email={user.email}
              userId={user.id}
            />
          ))
        }
      </ul>

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
      />
    </section>
  );
}