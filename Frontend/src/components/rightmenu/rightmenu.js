import React from 'react';
import './rightmenu.css';
import Medicine from '../../img/Medicine.svg';
import users from '../../img/users2.svg';
import schools from '../../img/schools2.svg';
import students from '../../img/students.svg';
import teacher from '../../img/teachers2.svg';
import courses from '../../img/courses2.svg';
import { Button } from 'antd';
import Consts from '../consts/consts';


const Rightmenu = ({ renderImputs, cancel, mode, onSubmit,currentRoute }) => {

  const selectIcon = () => {
    if (currentRoute === '/adminhome') {
      return Medicine;
    } else if (currentRoute === '/useradmin') {
      return users;
    }else if (currentRoute === '/schooladmin') {
      return schools;
    }else if (currentRoute === '/adminschool') {
      return schools;
    }else if (currentRoute === '/studentschool') {
      return students;
    }else if (currentRoute === '/teacherschool') {
      return teacher;
    }else if (currentRoute === '/coursesadmin') {
      return courses;
    }
    return null;
  };
  
  const shouldRenderContent = renderImputs && onSubmit;

  return (
    <div className="right_menu">
      {shouldRenderContent && (
        <div className="inputs">
          {renderImputs()}
          <div className='buttons'>
            <Button className='submit-button' onClick={onSubmit}>Enviar</Button>
            {mode !== Consts.ADD_MODE && mode && cancel && (
              <Button danger onClick={cancel}>
                Cancelar
              </Button>
            )}
          </div>
        </div>
      )}
      <img src={selectIcon()} alt="prueba" className="photo" />
    </div>
  );
};


export default Rightmenu;
