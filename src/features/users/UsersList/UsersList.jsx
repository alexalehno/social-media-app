import { useGetUsersQuery } from '../../api/apiSlice';
import { UsersItem } from '../UsersItem/UsersItem';

export const UsersList = () => {
  const { data: users = [] } = useGetUsersQuery();
   
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
