import React from 'react';
import { useAuth } from './auth';

function LogouPage() {
  const auth= useAuth();
  const logout = (e) =>{
    e.preventDefault();
    auth.logout();
  }
  return (
    <>
    
    <h1>logout</h1>


    <form onSubmit={logout}>
      <label>Seguro que quiere salir</label>
        <button type='submit'>Salir</button>
    </form>
    </>
  );
}
export default LogouPage ;
