import React from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../services/CourseService';
import {TOKEN_COOKIE_NAME} from "../constant";
import * as cookie from "react-cookies";
// Class based component

export default class EnrolledCourses extends React.Component {
    state = {
        courses: []
    }

    token = cookie.load(TOKEN_COOKIE_NAME)
    componentDidMount() {
        // Promise
        // 去把大象拉回来 保证会告诉你结果
        CourseService.getEnrolledCourses(this.token)
            .then(response => {
                // 把大象装冰箱
                this.setState({
                   courses: response.data 
                });
            })
            .catch(error => {
                // 没拉回来就 报错
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <CourseTable courses={this.state.courses}/>
            </div>
        );
    }

}