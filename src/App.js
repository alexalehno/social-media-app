import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout.jsx';
import { PostsList } from './features/posts/PostsList/PostsList.jsx';
import { HomePage } from './features/HomePage/HomePage.jsx';
import { UsersList } from './features/users/UsersList/UsersList.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<HomePage />} />
            <Route path="posts" element={<PostsList />} />
            <Route path="users" element={<UsersList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
