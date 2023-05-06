import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import PostContainer from './Component/PostContainer';
import { PostThunk } from './store/cardSlice';
import SignPage from './Component/SignPage';
// import Card from './Component/Card';

function App() {
  // const Posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostThunk());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Navbar />
      <SignPage />
      <PostContainer />
      {/* <Card card={Posts} /> */}
      {/* <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="/PostContainer" element={<PostContainer />} />
        <Route path="/sign" element={<SignPage />} />
      </Routes> */}
    </Router>
  );
}

export default App;
