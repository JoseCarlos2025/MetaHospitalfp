import React from 'react';
import './rightmenu.css';
import icon from '../../img/Medicine.png';
import { Button } from 'antd';
import Consts from '../consts/consts';


const Rightmenu = ({ renderImputs, cancel, mode, onSubmit }) => {
  return (
    <div className="right_menu">
      <div className="inputs">
        {renderImputs()}
        <div className='buttons'>
          <Button className='submit-button' onClick={onSubmit}>Enviar</Button>
          {mode !== Consts.ADD_MODE && mode && (
            <Button danger onClick={cancel}>
              Cancelar
            </Button>
          )}
        </div>
      </div>
      <img src={icon} alt="prueba" className="photo" />
    </div>
  );
};

export default Rightmenu;
