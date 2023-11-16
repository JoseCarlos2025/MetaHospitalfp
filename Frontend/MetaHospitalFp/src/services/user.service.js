import axios from 'axios';

const API_URL = 'http://localhost:4000/api';

const encodeCredentials = (email, password) => {
    return btoa(`${email}:${password}`);
};

export const getUser = async () => {
    try {
        const response = await axios.get(API_URL + '/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching User: ', error);
        return null;
    }
};

export const signin = async (email, password) => {
    try {
        const response = await axios.post(
            `${API_URL}/users/signin`,
            {},
            {
                headers: {
                    Authorization: `Basic ${encodeCredentials(email, password)}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        
        return response.data;
    } catch (error) {
        console.error('Error signin User: ', error);
        return null;
    }
};

const UserService = {
    getUser,
    signin
}

export default UserService;