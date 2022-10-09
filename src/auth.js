import React, {useContext }from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({children}){
    const navigate = useNavigate();
    const[user, setuser] = React.useState(null);


    const login =({username}) =>{
        setuser({username});
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
export { AuthProvider,
useAuth  }; 



// estos para guaradas informacion de autenticacion del usuario