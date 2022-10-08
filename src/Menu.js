import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Menu() {
    return (
      <nav>
        <ul>
          {routes.map(route => (
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'blue',
                })}
                to={route.to}
              >
                {route.text}
              </NavLink>
            </li>
          ))}
          
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li> */}
  

 {/*  esta para que cambie de color cuando este ubicado es la ruta */} 
          {/* <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
              to="/"
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
              to="/blog"
            >Blog</NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? 'red' : 'blue',
              })}
              to="/profile"
            >Profile</NavLink>
          </li> */}
        </ul>
      </nav>
    );
  }

  /* para cambie de color pero retulizando codigo */ 
  
  const routes = [];
  routes.push({
    to: '/',
    text: 'Home',
  });
  routes.push({
    to: '/blog',
    text: 'Blog',
  });
  routes.push({
    to: '/profile',
    text: 'Profile',
  });

export default Menu;
