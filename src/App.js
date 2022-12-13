import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="App flex w-full h-full bg-neutral-200">
        <Navbar/>
        
        <Routes>
          <Route exact path='/' element={<Hero/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
