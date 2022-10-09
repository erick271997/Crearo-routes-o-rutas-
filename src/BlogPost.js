import React from 'react';
import {  useParams,useNavigate } from 'react-router-dom';
import  blogdata  from './blogdata'

function BlogPost() {
    const navigate = useNavigate();
  const { slug } = useParams();

  const blogpost = blogdata.find(post => post.slug === slug);

  const returnToBlog = () =>{ //Boton para volver atras
      navigate('/blog');
      /* navigate(-1), tambie se puede asi pero este es mejor ya que cuando le das te lleva donde estabas primero */
  };
  const returnPrincipal = () =>{
      navigate(-1); //este lleva si pusiste la url donde vas  y luego pone y luego le das volver donde estabas 
  }

  return (
    <>
      <h1>{blogpost.title}</h1>
      <button onClick={returnToBlog}>Volver atras</button>
      <button onClick={returnPrincipal}>Va a la pagina donde estasbas</button>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export default BlogPost ;
