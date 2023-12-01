import React, { useState, useEffect } from 'react';
import './useradmin.css';
import BasicList from '../../components/basiclist/basiclist';
import UserService from '../../services/user.service';
import Menu from '../../components/menu/menu';
import Rightmenu from '../../components/rightmenu/rightmenu';
import { Input,Select } from 'antd';
import Consts from '../../components/consts/consts';

function UserAdmin() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [Id, setId] = useState('');
    const [discriminator, setDiscriminator] = useState('Estudiante');
    const Headlines = ['Nombre', 'Email', 'Identificador'];
    const [mode, setMode] = useState(Consts.ADD_MODE);

    const optionDiscriminator = [
        { value: 'Estudiante', label: 'Estudiante' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Profesor', label: 'Profesor' },
    ];

    const handleChange = (value) => {
        setDiscriminator(value);
    };

    const getUsers = async () => {
        try {
            const response = await UserService.getUser(localStorage.getItem('AccessToken'));
            const userList = response;
            setUsers(userList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };


    useEffect(() => {
        
        getUsers();

    }, []);


    const renderUserRow = (user) => (
        <>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.discriminator}</td>
        </>
    );

    const renderUserImputs = () => (
        <>
            <h1>{String(mode)}</h1>
            <p>Name</p>
            <Input placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <p>Email</p>
            <Input placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <p>discriminator</p>
            <Select
                defaultValue="Estudiante"
                value={discriminator}
                options={optionDiscriminator }
                onChange={handleChange} />
        </>
    );

    const onDelete = async (id) => {
        try {
            await UserService.deleteUser(localStorage.getItem('AccessToken'), id);
            console.log('Users deleted successfully');
            getUsers();
        } catch (error) {
            console.error('Error delete user:', error);
        }
    }

    const Edit = (id) => {
        const userToEdit = users.find(user => user.id === id);

        setId(id);

        setName(userToEdit.name);
        setEmail(userToEdit.email);
        setDiscriminator(userToEdit.discriminator);
        setMode(Consts.EDIT_MODE);
    }

    const onSubmit = async () => {
        try {
            if (mode === Consts.EDIT_MODE) {
                const userToEdit = users.find(user => user.id === Id);

                userToEdit.name = name;
                userToEdit.email = email;
                userToEdit.discriminator = discriminator;

                await UserService.updateUser(localStorage.getItem('AccessToken'), Id, userToEdit);

                console.log('Users updated successfully');
                getUsers();
            } else {
                const potUser = {
                    name: name,
                    discriminator: discriminator,
                };

                await UserService.createNewUser(potUser, email);

                console.log('New user created successfully');
                getUsers();
            }
        } catch (error) {
            console.error('Error updating/creating user:', error);
        }
    }

    const Cancel = () => {
        setMode(Consts.ADD_MODE);
        setName('');
        setEmail('');
        setDiscriminator('Estudiante');
    }

    return (
        <div className='container'>
            <div className='container-left'>
                <Menu />
                <BasicList items={users} renderRow={renderUserRow} Headlines={Headlines} onDelete={onDelete} onEdit={Edit}></BasicList>
            </div>
            <div className='container-right'>
                <Rightmenu renderImputs={renderUserImputs} cancel={Cancel} mode={mode} onSubmit={onSubmit} />
            </div>
        </div>
    );

}

export default UserAdmin;