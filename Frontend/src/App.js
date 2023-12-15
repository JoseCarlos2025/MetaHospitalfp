import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Login from './interfaces/login/login';
import UserAdmin from './interfaces/useradmin/useradmin';
import SchoolsAdmin from './interfaces/schooladmin/schooladmin';
import StudentSchools from './interfaces/studentschool/studentschool';
import TeacherSchools from './interfaces/teacherschool/teacherschool';
import CoursesAdmin from './interfaces/coursesadmin/coursesadmin';
import GroupsAdmin from './interfaces/groupsadmin/groupsadmin';
import AdminHome from './interfaces/adminhome/adminhome';
import AdminSchool from './interfaces/adminschool/adminschool';
import Profile from './interfaces/porfile/porfile';

function App() {
  const [discriminator, setDiscriminator] = useState(localStorage.getItem('discriminator'));

  useEffect(() => {
    const storedDiscriminator = localStorage.getItem('discriminator');
    setDiscriminator(storedDiscriminator);
    console.log('hola');
  }, []); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {discriminator === 'admin' && (
          <>
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/useradmin" element={<UserAdmin />} />
            <Route path="/schooladmin" element={<SchoolsAdmin />} />
            <Route path="/adminschool" element={<AdminSchool />} />
            <Route path="/studentschool" element={<StudentSchools />} />
            <Route path="/teacherschool" element={<TeacherSchools />} />
            <Route path="/coursesadmin" element={<CoursesAdmin />} />
            <Route path="/groupsadmin" element={<GroupsAdmin />} />
          </>
        )}

        {discriminator === 'Estudiante' && (
          <Route path="/porfile" element={<Profile />} />
        )}

        {discriminator === 'profesor' && (
          <Route path="/porfile" element={<Profile />} />
        )}

        {(!discriminator || (discriminator !== 'admin' && discriminator !== 'Estudiante' && discriminator !== 'profesor')) && (
          <Navigate to="/" replace={true} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

