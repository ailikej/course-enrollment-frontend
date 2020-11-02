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

    constructor(props) {
        super(props);

        this.handleDropCourse = this.handleDropCourse.bind(this);
        this.getEnrolledCourses = this.getEnrolledCourses.bind(this);
        // more self defined class methods go here to bind this
    }

    componentDidMount() {
        // Promise
        // 去把大象拉回来 保证会告诉你结果

        this.getEnrolledCourses();
    }

    render() {
        return (
            <div>
                <CourseTable courses={this.state.courses}
                    actionButtonLabel="Drop"
                    handleActionButtonClick = {this.handleDropCourse.bind(this)}/>
            </div>
        );
    }

    getEnrolledCourses() {
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

    handleDropCourse(course){
        CourseService.dropCourse(this.token, course.courseName)
            .then(response => {
                alert(`Successfully dropped course ${course.courseName}`);
                this.getEnrolledCourses();
            })
            .catch(error => {
                alert(`Failed to drop course ${course.courseName}`)
            })
    }

}