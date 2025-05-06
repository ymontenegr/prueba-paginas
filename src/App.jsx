
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PostDetails from './pages/PostDetails';
import ErrorPage from './pages/ErrorPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  

  return (

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<PostDetails />} />
          <Route path="Settings" element={<SettingsPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>

    
  );
}

export default App
