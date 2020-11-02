// Function based component(previous stateless componenet)
// Use React hook(16.8.0 after) to use state (must) 

import React, { useEffect, useState } from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../services/CourseService';
import {TOKEN_COOKIE_NAME} from "../constant";
import * as cookie from "react-cookies";

export default function AllCourses(props) {
    // useState return [stateVariable, function to setState]
    const [courses, setCourses] = useState([]);
    const token = cookie.load(TOKEN_COOKIE_NAME);
    //默认情况下是等价于componentDidMount + compondetDidUpdate
    //一但dependency list = [] 代表不关注任何state change 也就是说不关心componentDidUpdate
    // 此时 userEffect（callBack， []） 等价于componentDidMount. 如果直接不写，就是都care

    useEffect(() => {
        CourseService.getAllCourses(token)
            .then(response => {
                setCourses(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);

    return (
        <div>
            <CourseTable courses={courses}
                         action actionButtonLabel="Enroll"
                         handleActionButtonClick={handleEnrollCourse} />
        </div>

    );

    function handleEnrollCourse(course){
        CourseService.enrollCourse(token, course.courseName)
            .then(response => {
                alert(`Sucessfully enrolled course ${course.courseName}`);
            })
            .catch(error => {
                alert(`Failed to enroll course ${course.courseName}`);

            });
    }
}