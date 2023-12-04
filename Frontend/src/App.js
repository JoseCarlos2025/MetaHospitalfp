import './App.css';
import { Route,  BrowserRouter, Routes } from 'react-router-dom';
import Login from './interfaces/login/login';
import UserAdmin from './interfaces/useradmin/useradmin';
import SchoolsAdmin from './interfaces/schooladmin/schooladmin';
import StudentSchools from './interfaces/studentschool/studentschool';
import TeacherSchools from './interfaces/teacherschool/teacherschool';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/useradmin" element={<UserAdmin/>} />
        <Route path="/schooladmin" element={<SchoolsAdmin/>} />
        <Route path="/studentschool" element={<StudentSchools/>} />
        <Route path="/teacherschool" element={<TeacherSchools/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
