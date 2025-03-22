import classes from './UsersItem.module.scss';
import { Link } from 'react-router-dom';
import { setColor } from '../../../functions/functions';

export const UsersItem = ({name, city, email}) => {
  return (
    <li>
      <Link to={``}>
        <div className={classes.content}>
          <div className={classes.photoName_wrapper}>
            <div className={classes.photo} style={{backgroundColor: setColor()}}></div>
            <h3 className={classes.name}>{name}</h3>
          </div>

          <div className={classes.cityEmail_wrapper}>
            <span className={classes.city}>{city}</span>
            <span className={classes.email}>{email}</span>
          </div>
        </div>
      </Link> 
    </li>
  );
}