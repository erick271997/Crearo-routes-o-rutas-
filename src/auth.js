import React, {useContext }from "react";
import { Navigate, useNavigate } from "react-router-dom";

const adminList = ['Irisval', 'Retaxmaster', 'freddier'];

const AuthContext = React.createContext();


function AuthProvider({children}){
    const navigate = useNavigate();
    const[user, setuser] = React.useState(null);


    const login =({username}) =>{
        const isAdmin = adminList.find(admin => admin === username);
        setuser({username, isAdmin});
        navigate('/profile');
    };
    
    const logout =() =>{
        setuser(null);
        navigate('/');
    };
    const auth = {user, login, logout};

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const auth= React.useContext(AuthContext);
    return auth;
    
}

function AuthRoute  (props){
    const auth = useAuth();
    if (!auth.user) { // si no hay login 
     return <Navigate to= "/login" />; // estos para que no puedan entrat sin login ya que podrian entrar con solo poner la url
    }
  return props.children;
} 


export { AuthProvider,AuthRoute,
useAuth  }; 



// estos para guaradas informacion de autenticacion del usuario