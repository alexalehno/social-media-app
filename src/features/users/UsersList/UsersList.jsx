import { selectAllUsers } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { UsersItem } from '../UsersItem/UsersItem';

export const UsersList = () => {
  const users = useSelector(selectAllUsers);
   
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
