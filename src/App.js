import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import store from './store';
import { Provider } from 'react-redux';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App flex w-full h-full bg-neutral-200">
          <Navbar/>
          
          <Routes>
            <Route exact path='/' element={<Hero/>}></Route>
            <Route exact path='/sign-in' element={<SignIn/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
