import classes from './UsersItem.module.scss';
import { Link } from 'react-router-dom';
import { setColor } from '../../../functions/functions';

export const UsersItem = ({name, city, email, userId}) => {
  return (
    <li>
      <Link className={classes.content} to={`/users/${userId}`}> 
        <div className={classes.photoName_wrapper}>
          <div className={classes.photo} style={{backgroundColor: setColor()}}></div>
          <h3 className={classes.name}>{userId}. {name}</h3>
        </div>

        <div className={classes.cityEmail_wrapper}>
          <span className={classes.city}>{city}</span>
          <span className={classes.email}>{email}</span>
        </div>
      </Link> 
    </li>
  );
}