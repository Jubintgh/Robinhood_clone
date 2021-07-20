
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <NavLink id="navbar__brand-home" to='/' exact={true} activeClassName='active'>
            <img src='https://user-images.githubusercontent.com/35717793/126367109-4954f04b-0cb7-4ca9-a25a-d18e6b7cb74a.png' alt='logo' id='navbar__logo' />
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <li className="navbar__button">
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
