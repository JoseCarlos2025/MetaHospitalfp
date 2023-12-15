import React from 'react';
import './menu.css';
import logo from '../../img/Icon.png';
import { Link, useLocation } from 'react-router-dom';

function Menu() {

    const location = useLocation();

    const getMenuActiveItem = () => {
        const { pathname } = location;

        if (pathname === '/adminhome') {
            return 'Inicio';
        } else if (pathname === '/useradmin') {
            return 'Usuarios';
        } else if (pathname === '/schooladmin') {
            return 'Escuelas';
        }

        return 'Inicio'; 
    };

    return (
        <div className="menu">
            <nav>
                <ul className="menuItems">
                    <img src={logo} alt="logotype" className="logotype" />
                    <li>
                        <Link
                            to="/adminhome"
                            data-item="Inicio"
                            className={getMenuActiveItem() === 'Inicio' ? 'active' : ''}
                        >
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/useradmin"
                            data-item="Usuarios"
                            className={getMenuActiveItem() === 'Usuarios' ? 'active' : ''}
                        >
                            Usuarios
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/schooladmin"
                            data-item="Escuelas"
                            className={getMenuActiveItem() === 'Escuelas' ? 'active' : ''}
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
