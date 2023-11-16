import React, { useState } from 'react';
import './loginbox.css';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input } from 'antd';
import Logo from '../../img/Icon.png';

import UserService from '../../services/user.service';

function LoginBox() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        UserService.signin(email, password);
    };

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
                        <Input.Password className='input'
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                        <Button className='button-login' type='primary' onClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginBox;
