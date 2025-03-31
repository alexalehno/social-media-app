import classes from './PostAuthor.module.scss';
import { useSelector } from 'react-redux';
import { selectUserById } from '../../api/apiSlice';

export const PostAuthor = ({ userId }) => {
  const user = useSelector(state => selectUserById(state, userId));

  return (
    <span className={classes.author}>
      by {user ? user.name : 'Unknown author' }
    </span>
  );
}