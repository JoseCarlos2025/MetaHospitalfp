import React, { useState, useEffect } from 'react';
import './teacherschool.css';
import BasicList from '../../components/basiclist/basiclist';
import TeacherSchoolsService from '../../services/teacherschool.service';
import UserService from '../../services/user.service';
import Menu from '../../components/menu/menu';
import Rightmenu from '../../components/rightmenu/rightmenu';
import { Input, List } from 'antd';
import Consts from '../../components/consts/consts';

function TeacherSchools() {
    const [teacher, setTeacher] = useState([]);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const Headlines = ['Nombre'];

    const getTeacher = async () => {
        try {
            const response = await TeacherSchoolsService.getTeachersBySchool(
                localStorage.getItem('AccessToken'),
                localStorage.getItem('schoolId')
            );
            const teacherList = response.map(teacher => teacher.User);
            setTeacher(teacherList);
        } catch (error) {
            console.error('Error fetching teacher:', error);
        }
    };

    const getUsers = async () => {
        try {
            const response = await UserService.getUserTeachers(localStorage.getItem('AccessToken'));
            const userList = response;
            setUsers(userList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        getTeacher();
        getUsers();
    }, []);

    const filterUsers = (value) => {
        const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filteredUsers.slice(0, 3));
    };

    const renderSchoolRow = (teacher) => (
        <>
            <td>{teacher.name}</td>
        </>
    );

    const changeName = (name, id) => {
        setName(name);
        setUserId(id);
        console.log(id);
    }

    const renderSchoolImputs = () => (
        <>
            <h1>{String(Consts.ADD_MODE)}</h1>
            <p>Name</p>
            <Input.Search
                placeholder="Buscar profesor"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                    filterUsers(e.target.value);
                }}
            />
            <List
                bordered
                dataSource={searchResults}
                renderItem={(user) => (
                    <List.Item onClick={() => changeName(user.name, user.id)}>
                        {user.name}
                    </List.Item>
                )}
            />
        </>
    );


    const onDelete = (id) => {
        try {
            getTeacher();
            
            TeacherSchoolsService.deleteTeacherFromSchool(localStorage.getItem('AccessToken'), localStorage.getItem('schoolId') ,id);
            
            getTeacher();

            console.log('teacher deleted successfully');
        } catch (error) {
            console.error('Error delete teacher:', error);
        }
    };

    const onSubmit = async () => {
        try {

            if (!userId) {
                console.error('Error: UserId is not defined.');
                return;
            }
    
            const teacher = {
                UserId: userId,
            };
    
            await TeacherSchoolsService.createNewTeacher(localStorage.getItem('AccessToken'), localStorage.getItem('schoolId'), teacher);
    
            getTeacher();
            console.log('New teacher created successfully');
        } catch (error) {
            console.error('Error updating/creating teacher:', error);
        }
    };

    return (
        <div className='container'>
            <div className='container-left'>
                <Menu />
                <BasicList items={teacher} renderRow={renderSchoolRow} Headlines={Headlines} onDelete={onDelete} />
            </div>
            <div className='container-right'>
                <Rightmenu renderImputs={renderSchoolImputs} onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default TeacherSchools;
