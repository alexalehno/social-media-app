import { useGetUsersQuery } from '../../api/apiSlice';
import { UsersItem } from '../UsersItem/UsersItem';
import { Spinner } from '../../../components/Spinner/Spinner';

export const UsersList = () => {
  const { data: users = [], isLoading } = useGetUsersQuery();

  if (isLoading) {
    return <section className='container'><Spinner text='Loading...'/></section> 
  }  
   
  return (
    <section className='container'>
      <h2>Users</h2>
      <ul>
        {
          users.map(user => (
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
    </section>
  );
}
