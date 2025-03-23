import classes from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', name: 'Home' },
  { to: '/posts', name: 'Posts' },
  { to: '/users', name: 'Users' }
];

const NavItem = ({to, name}) => {
  return (
    <li className={classes.navItem}>
      <NavLink className={classes.navLink} to={to}>{name}</NavLink>
    </li>
  )
}

export const Navbar = ({to, name}) => { 
  return (
    <nav>
      <ul className={classes.navList}>
        {
          routes.map((route,i) => (
            <NavItem to={route.to} name={route.name} key={i}/>
          )) 
        }
      </ul>
    </nav>
  )
}
