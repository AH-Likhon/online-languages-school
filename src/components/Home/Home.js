import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses] = useCourses();
    // console.log(courses);
    const sliceCourses = courses.slice(0, 4);
    return (
        <div>
            <h3 className="mt-4 fw-bold">Popular Courses</h3>
            <div className="course-container">
                {
                    sliceCourses.map(course => <Course
                        course={course}
                        key={course.id}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Home;