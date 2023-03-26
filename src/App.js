import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Card from './Component/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Card/>
      </header>
    </div>
  );
}

export default App;
