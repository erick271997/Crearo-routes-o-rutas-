import React from 'react';
import {  useParams,useNavigate } from 'react-router-dom';
import { useAuth } from './auth';
import  blogdata  from './blogdata'

function BlogPost() {
    const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useAuth();

  const blogpost = blogdata.find(post => post.slug === slug);

  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username; 

  const returnToBlog = () =>{ //Boton para volver atras
      navigate('/blog');
      /* navigate(-1), tambie se puede asi pero este es mejor ya que cuando le das te lleva donde estabas primero */
  };
  const returnPrincipal = () =>{
      navigate(-1); //este te lleva si pusiste la url donde vas  y luego pone y luego le das volver donde estabas 
  }

  return (
    <>
      <h1>{blogpost.title}</h1>
      <button onClick={returnToBlog}>Volver atras</button>
      <button onClick={returnPrincipal}>Va a la pagina donde estasbas</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>

      {canDelete &&(
        <button>Eliminar blogpost</button>
      )}
    </>
  );
}

export default BlogPost ;
