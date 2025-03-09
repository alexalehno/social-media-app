import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { PostsList } from './features/posts/PostsList/PostsList.jsx';
import { HomePage } from './features/HomePage/HomePage.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="posts" element={<PostsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
