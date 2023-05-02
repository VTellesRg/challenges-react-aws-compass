//import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Auth } from './helpers/Auth';


function App() {

  return (

    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Auth children={<Home/>} />} />
      </Routes>
    </div>
  );
}

export default App;
