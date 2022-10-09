import { HashRouter, Routes, Route } from 'react-router-dom';
import  Menu  from './Menu';
import {AuthProvider} from './auth';
import  HomePage  from './HomePage';
import  BlogPage  from './BlogPage';
import  BlogPost  from './BlogPost';
import  ProfilePage  from './ProfilePage';
import LoginPage from './LoginPage';
import LogouPage from './LogouPage';

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalalala -> Not Found
// /blog, /lalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}> 
          <Route path=":slug" element={<BlogPost />} />
          {/* esto es para poner que apararza el botton de volver y el conetino visble si salir de la ruta */}

          </Route>
       {/*    rutas */}

          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogouPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          
          
          
          
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
