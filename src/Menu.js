import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './auth';

function Menu() {
//para que el mueno sepa si ya entre

const auth = useAuth();


  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          // esto dice que si no estomos auteticado y intemos entra a un rutas privada no retorna nada es decir apara cerrar sesion cuando ya entramos
            
          
          return(  
              <li key={route.to}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? 'red' : 'blue',
                  })}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              </li>
            );
          
        })}
        
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

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

const routes = [];
routes.push({
  to: '/',
  text: 'Home',
  private: false,
});
routes.push({
  to: '/blog',
  text: 'Blog',
  private: false,
});
routes.push({
  to: '/profile',
  text: 'Profile',
  private: true,//para poner la rutas privadas o publicas
});
routes.push({
  to:'/login',
  text: 'login',
  private: false,
  publicOnly: true,
});
routes.push({
  to:'/logout',
  text: 'logout',
  private: true,
});

export default Menu ;
