import React, { useState } from 'react';
import './loginbox.css';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Logo from '../../img/Icon.png';
import { useNavigate } from 'react-router-dom';

import UserService from '../../services/user.service';

function LoginBox() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (ValidationLogin()) {
            const response = await UserService.signin(email, password);

            if (response && response.access_token) {

                const accessToken = response.access_token;
                const discriminator = response.user.discriminator;

                localStorage.setItem('AccessToken', accessToken);
                localStorage.setItem('Discriminator', discriminator);

                navigate('/useradmin');

                console.log('Inicio de sesión exitoso.');
            } else {
                setErrorPassword('La contraseña o el email no son validos');
            }
        }
    };

    const ValidationLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email && !password) {
            setErrorEmail('Debe rellenar el campo');
            setErrorPassword('Debe rellenar el campo');
            return false;
        } else if (!emailRegex.test(email) && password){
            setErrorEmail('Formato de correo electrónico no válido');
            setErrorPassword('');
        } else if (!emailRegex.test(email) && !password) {
            setErrorEmail('Formato de correo electrónico no válido');
            setErrorPassword('Debe completar el campo Contraseña');
            return false;
        }else if (!password) {
            setErrorEmail('');
            setErrorPassword('Debe completar el campo Contraseña');
            return false;
        } else {
            setErrorPassword('');
            setErrorEmail('');
            return true;
        }
    }

    return (
        <div className='content'>
            <div className='box'>
                <div className='box-rigt'>

                </div>
                <div className='box-left'>
                    <div className='logo'>
                        <img src={Logo} alt="My logo" />
                        <h1>MetaHospitalFp</h1>
                    </div>
                    <div className='imputs'>
                        <Input className='input'
                            placeholder="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            prefix={<UserOutlined />}
                        />
                        {errorEmail && <div className='error-message'>{errorEmail}</div>}
                        <Input.Password className='input'
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        {errorPassword && <div className='error-message'>{errorPassword}</div>}
                        <Button className='button-login' type='primary' onClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginBox;
