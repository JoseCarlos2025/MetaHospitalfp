import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const getSchools = async (token) => {
    try {
        const response = await axios.get(API_URL + '/schools',{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error geting school: ', error);
        return null;
    }
};

export const deleteSchool = async (token,id) => {
    try {
        const response = await axios.delete(API_URL + '/schools/'+id,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return response.data;
        
    } catch (error) {
        console.error('Error delete school: ', error);
        return null;
    }
};

export const updateSchool = async (token,id,updatedSchoolsData) => {
    try {
        const response = await axios.put(API_URL + '/schools/'+id, updatedSchoolsData,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error delete school: ', error);
        return null;
    }
};

export const createNewSchool = async (postSchool,token) => {
    try {
        const response = await axios.post(`${API_URL}/schools`, postSchool,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error delete school: ', error);
        return null;
    }
};

const SchoolsService = {
    getSchools,
    deleteSchool,
    updateSchool,
    createNewSchool
}

export default SchoolsService;