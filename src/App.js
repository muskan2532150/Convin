// eslint-disable-next-line react-hooks/exhaustive-deps
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import PostContainer from './Component/PostContainer';
import { PostThunk } from './store/cardSlice';
import SignUp from './Component/SignUp';
import SignInPage from './Component/SignInPage';
import Postform from './Component/Postform';

function App() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) dispatch(PostThunk());
  }, [posts.length, dispatch]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/createpost" element={<Postform />} />
      </Routes>
    </Router>
  );
}

export default App;
