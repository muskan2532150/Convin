import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Card from './Component/Card';
import NewCard from './Component/NewCard';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
     <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path="/cards" element={<Card/>} />
        <Route path="/newcard" element={<NewCard/>} />
      </Routes>
     </Router>
    </Provider>
  );
}

export default App;
