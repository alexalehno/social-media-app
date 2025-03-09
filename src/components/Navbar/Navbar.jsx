import classes from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => { 
  return (
    <nav>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <NavLink className={classes.navLink} to="/">Home</NavLink>
        </li>

        <li className={classes.navItem}>
          <NavLink className={classes.navLink} to="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  )
}
