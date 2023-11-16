import './App.css';
import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import Login from './interfaces/login/login';
import UserAdmin from './interfaces/useradmin/useradmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/useradmin" element={<UserAdmin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
