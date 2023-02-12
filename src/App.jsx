
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Menu from './routes/Menu';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
