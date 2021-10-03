import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            <h3 className="mt-4 fw-bold">All Courses</h3>
            <div className="course-container">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;