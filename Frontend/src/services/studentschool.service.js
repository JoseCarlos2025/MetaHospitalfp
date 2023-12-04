import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const getStudentsBySchool = async (token,id) => {
    try {
        const response = await axios.get(API_URL + '/schools/'+id+'/students',{
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

export const createNewStudent = async (token, id, updatedStudentSchoolsData) => {
    try {
        const response = await axios.post(API_URL + '/schools/'+ id +'/students', updatedStudentSchoolsData,{
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error ceate students: ', error);
        return null;
    }
};

export const deleteStudentFromSchool = async (token, schoolId, userId) => {
    try {
        const response = await axios.delete(API_URL + `/schools/${schoolId}/students/${userId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        return response.data;
        
    } catch (error) {
        console.error('Error deleting student: ', error);
        return null;
    }
};

const StudentSchoolsService = {
    getStudentsBySchool,
    createNewStudent,
    deleteStudentFromSchool
}

export default StudentSchoolsService;