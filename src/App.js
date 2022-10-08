import { HashRouter, Routes, Route } from 'react-router-dom';
/* esto HashRouter puede cambair por un Brows o Many */
import  Menu  from './Menu';
import  HomePage  from './HomePage';
import  BlogPage  from './BlogPage';
import  ProfilePage  from './ProfilePage';

// /#/ -> Home
// /#/blog
// /#/profile
// /#/lalalala -> Not Found
// /blog, /lalala -> Home

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* esta es la ruta para que nos lleve el cuando hay varias seciones  */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<p>Not found</p>} />
          {/* esta cuando no encuentre la ruta */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;