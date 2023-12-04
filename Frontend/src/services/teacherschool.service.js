import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const getTeachersBySchool = async (token,id) => {
    try {
        const response = await axios.get(API_URL + '/schools/'+id+'/teachers',{
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

export const createNewTeacher = async (token, id, updatedteacherschoolsData) => {
    try {
        const response = await axios.post(API_URL + '/schools/'+ id +'/teachers', updatedteacherschoolsData,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error ceate teachers: ', error);
        return null;
    }
};

export const deleteTeacherFromSchool = async (token, schoolId, userId) => {
    try {
        const response = await axios.delete(API_URL + `/schools/${schoolId}/teachers/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return response.data;
        
    } catch (error) {
        console.error('Error deleting teacher: ', error);
        return null;
    }
};

const TeacherSchoolsService = {
    getTeachersBySchool,
    createNewTeacher,
    deleteTeacherFromSchool
}

export default TeacherSchoolsService;