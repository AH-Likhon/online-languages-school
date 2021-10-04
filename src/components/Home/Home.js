import React from 'react';
import { Carousel } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';
import slider1 from '../../images/slider-1.jpg';
import slider2 from '../../images/slider-2.jpg';
import slider3 from '../../images/slider-3.jpg';
import './Home.css'

const Home = () => {
    const [courses] = useCourses();
    // console.log(courses);
    const sliceCourses = courses.slice(0, 4);

    return (
        <div>

            {/* <Slider start> */}
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Online Languages Learning Platform</h3>
                            <p>Learn Languages and Connect With The World.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Online Languages Learning Platform</h3>
                            <p>Become a Global Citizen with Multi-Language</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Online Languages Learning Platform</h3>
                            <p>Learn Languages and Connect With The World.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

            {/* course details start */}
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


        </div>
    );
};

export default Home;