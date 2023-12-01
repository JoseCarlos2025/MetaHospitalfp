import React, { useState, useEffect } from 'react';
import './studentschool.css';
import BasicList from '../../components/basiclist/basiclist';
import StudentSchoolsService from '../../services/studentschool.service';
import UserService from '../../services/user.service';
import Menu from '../../components/menu/menu';
import Rightmenu from '../../components/rightmenu/rightmenu';
import { Input, List } from 'antd';
import Consts from '../../components/consts/consts';

function StudentSchools() {
    const [students, setStudents] = useState([]);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const Headlines = ['Nombre'];

    const getStudents = async () => {
        try {
            const response = await StudentSchoolsService.getStudentsBySchool(
                localStorage.getItem('AccessToken'),
                Consts.SchoolId
            );
            const studentList = response;
            setStudents(studentList);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
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
        getStudents();
        getUsers();
    }, []);

    const filterUsers = (value) => {
        const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filteredUsers.slice(0, 3));
    };

    const renderSchoolRow = (student) => (
        <>
            <td>{student.User.name}</td>
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
                placeholder="Buscar estudiantes"
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


    const onDelete = async (item) => {
        try {
            console.log(item.UserId);
            await StudentSchoolsService.deleteStudentFromSchool(localStorage.getItem('AccessToken'), Consts.SchoolId ,item.UserId);
            getStudents();
            console.log('student deleted successfully');
        } catch (error) {
            console.error('Error delete student:', error);
        }
    };

    const onSubmit = async () => {
        try {
            if (!userId) {
                console.error('Error: UserId is not defined.');
                return;
            }
    
            const student = {
                UserId: userId,
            };
    
            await StudentSchoolsService.createNewStudent(localStorage.getItem('AccessToken'), Consts.SchoolId, student);
    
            getStudents();
            console.log('New student created successfully');
        } catch (error) {
            console.error('Error updating/creating student:', error);
        }
    };

    return (
        <div className='container'>
            <div className='container-left'>
                <Menu />
                <BasicList items={students} renderRow={renderSchoolRow} Headlines={Headlines} onDelete={onDelete} />
            </div>
            <div className='container-right'>
                <Rightmenu renderImputs={renderSchoolImputs} onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default StudentSchools;
