import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import TeamMembers from '../TeamMembers/TeamMembers';
import './About.css'

const AboutUS = () => {
    const [courses] = useCourses();

    return (
        <div>
            <div className="my-5">
                <h3>About Us</h3>
                <p>It is a long established fact that a reade.</p>
                <hr className="w-25 mx-auto" />
            </div>

            <div className="d-flex justify-content-center">
                <div className="border-end px-5">
                    <h3>4000</h3>
                    <h6>Foreign Followers</h6>
                </div>
                <div className="border-end px-5">
                    <h3>50</h3>
                    <h6>Certified Teachers</h6>
                </div>
                <div className="border-end px-5">
                    <h3>1400</h3>
                    <h6>Students Enrolled</h6>
                </div>
                <div className="px-5">
                    <h3>180</h3>
                    <h6>Complete Courses</h6>
                </div>
            </div>

            <div className="team-container">
                <h4 className="my-5">Meet Our Team Members</h4>

                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(course => <TeamMembers
                            key={course.id}
                            course={course}
                        ></TeamMembers>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default AboutUS;