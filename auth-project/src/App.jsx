import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>  {/* Use BrowserRouter here */} 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />  {/* Add / before login */}
        <Route path='/signup' element={<Signup />} />  {/* Add / before signup */}
      </Routes>
    </Router>
  );
}

export default App;
