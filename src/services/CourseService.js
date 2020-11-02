import axios from '../axios';
//把大象拉回来
export const CourseService = {
    getAllCourses: function (token) {
        return axios.get('/api/course', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },

    getEnrolledCourses: function (token) {
        return axios.get('/api/course/enrollment', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    enrollCourse: function (token, courseName){
        return axios.post('/api/course/enrollment', {
            courseName
        }, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    },
    dropCourse: function (token, courseName) {
        return axios.delete(`/api/course/enrollment/${courseName}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    }
};