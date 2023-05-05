import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Component/Navbar';
import PostContainer from './Component/PostContainer';
import { PostThunk } from './store/cardSlice';
import SignPage from './Component/SignPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostThunk());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Router>
      <Navbar />
      <SignPage />
      <Routes>
        <Route path="/" element={<PostContainer />} />
        <Route path="/PostContainer" element={<PostContainer />} />
        <Route path="/sign" element={<SignPage />} />
      </Routes>
    </Router>
  );
}

export default App;
