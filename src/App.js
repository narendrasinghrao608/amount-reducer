import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Shop/>
      </div>
      <h1>Hare krishna</h1>
    </div>
  );
}

export default App;
