import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import logo from '../../img/Icon.png';
import Consts from '../consts/consts';

function Menu() {

    const handleItemClick = (item) => {
        Consts.activeItem = item;
    };

    return (
        <div className="menu">
            <nav>
                <ul className="menuItems">
                    <img src={logo} alt="logotype" className="logotype" />
                    <li>
                        <Link
                            to="/useradmin"
                            data-item="Inicio"
                            className={Consts.activeItem === 'Inicio' || window.location.pathname === '/useradmin' ? 'active' : ''}
                            onClick={() => handleItemClick('Inicio')}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/usuarios"
                            data-item="Usuarios"
                            className={Consts.activeItem === 'Usuarios' ? 'active' : ''}
                            onClick={() => handleItemClick('Usuarios')}
                        >
                            Usuarios
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/schooladmin"
                            data-item="Escuelas"
                            className={Consts.activeItem === 'Escuelas' ? 'active' : ''}
                            onClick={() => handleItemClick('Escuelas')}
                        >
                            Escuelas
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
