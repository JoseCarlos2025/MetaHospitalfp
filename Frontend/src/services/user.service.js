import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

const encodeCredentials = (email, password) => {
    return btoa(`${email}:${password}`);
};

export const getUser = async (token) => {
    try {
        const response = await axios.get(API_URL + '/users/user/'+localStorage.getItem('id'),{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error geting User: ', error);
        return null;
    }
};

export const getUsers = async (token) => {
    try {
        const response = await axios.get(API_URL + '/users',{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error geting User: ', error);
        return null;
    }
};

export const getUserStudents = async (token) => {
    try {
        const response = await axios.get(API_URL + '/users/students',{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error geting User: ', error);
        return null;
    }
};

export const getUserTeachers = async (token) => {
    try {
        const response = await axios.get(API_URL + '/users/teachers',{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error geting User: ', error);
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

export const deleteUser = async (token,id) => {
    try {
        const response = await axios.delete(API_URL + '/users/'+id,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error delete User: ', error);
        return null;
    }
};

export const updateUser = async (token,id,updatedUserData) => {
    try {
        const response = await axios.put(API_URL + '/users/'+id, updatedUserData,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error delete User: ', error);
        return null;
    }
};

export const updateUserFile = async (token, file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);  // Asegúrate de que la clave sea 'file', que coincide con el servidor
  
      const response = await axios.put(
        `${API_URL}/users/${localStorage.getItem('id')}`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      console.error('Error al actualizar el usuario con archivo: ', error);
      return null;
    }
  };
  

export const createNewUser = async (potUser,email) => {
    try {
        const password = 'metahospital';
        const response = await axios.post(`${API_URL}/users`, potUser,{
            headers: {
                Authorization: `Basic ${encodeCredentials(email, password)}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error delete User: ', error);
        return null;
    }
};

const UserService = {
    getUser,
    getUsers,
    getUserStudents,
    getUserTeachers,
    signin,
    deleteUser,
    updateUser,
    updateUserFile,
    createNewUser
}

export default UserService;