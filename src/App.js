import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import PostContainer from './Component/PostContainer';
import { PostThunk } from './store/cardSlice';
import SignPage from './Component/SignPage';
// import Card from './Component/Card';
import SignInPage from './Component/SignInPage';
import Postform from './Component/Postform';

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
      <SignInPage />
      <SignPage />
      <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/createpost" element={<Postform />} />
      </Routes>
    </Router>
  );
}

export default App;
