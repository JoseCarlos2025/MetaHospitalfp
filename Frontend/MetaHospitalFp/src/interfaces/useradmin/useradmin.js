import React, { useState, useEffect } from 'react';
import './useradmin.css';
import BasicList from '../../components/basiclist/basiclist';
import UserService from '../../services/user.service';

function UserAdmin() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await UserService.getUser();
                const userList = response;
                setUsers(userList);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    const renderUserRow = (user) => (
        <>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </>
    );

    return (
        <>
            <BasicList items={users} renderRow={renderUserRow}></BasicList>
        </>
    );

}

export default UserAdmin;