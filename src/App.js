import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostsList } from './features/posts/PostsList/PostsList.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PostsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
