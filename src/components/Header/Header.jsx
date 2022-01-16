import logo from 'assets/tmovie.png';
import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

const headerNav = [
  {
    display: 'Home',
    path: '/',
  },
  {
    display: 'Movie',
    path: '/movie',
  },
  {
    display: 'TV Series',
    path: '/tv',
  },
];

function Header(props) {
  const headerRef = useRef(null);

  useEffect(() => {
    const shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    };

    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="vMovie-logo" />
          <Link to="/">vMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((header, index) => (
            <li key={index}>
              <NavLink to={header.path}>{header.display}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
