import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const JobDetails = () => {

    const selectedJob = useSelector(state => state.selectJob);

    if(selectedJob && Object.keys(selectedJob).length > 0)
    {
        return(
            <div class = "showJobContent">
            <div id = "stickyContent">
                <span class = "jobName">
                    <h1>{selectedJob.name}</h1>
                </span>
                <span class = "companyName">
                    <p>{selectedJob.companyName}</p>
                </span>
                <span class = "location">
                    <span class="fa fa-map-marker"></span>
                    <p>{selectedJob.location}</p>
                </span>
            </div>
                
            <div id ="content2">
                <h2>Job Details</h2>
                <h3>Job Type</h3>
                <span class ="jobType">
                   <p>{selectedJob.type}</p>
                </span>
            </div>
            <hr></hr>
            <h3>Full Job Description</h3>
            <p>{selectedJob.description}</p>
            <h3>Responsibiltes:</h3>
            <ul>
                <li>Design, develop, test, deploy, maintain and improve the customer-facing GUI for a hand held ROV controller, running embedded linux</li>
                <li>Develop Qt applications, with a focus on the front-end QML code base with a tight interaction with a C++ backend</li>
                <li>Design visually pleasing, scalable, efficient front-end UI components and systems</li>
                <li>Create UI features including: vehicle navigation information, user menus, diagnostic information, and sensor data</li>
                <li>Deliver an intuitive UX for a wide variety of users</li>
                <li>Coordinate feature development with back-end and robotics software developers</li>
            </ul>
            <h3>Skills and Qualifications:</h3>
            <ul>
                <li>University degree in Software, Electrical/Electronics, Mechatronics, Computer Science, or related field</li>
                <li>Knowledge of modern Javascript and web technologies</li>
                <li>Experience with Qt/QML or similar C++ GUI development toolkits</li>
                <li>Development experience in an embedded Linux environment</li>
                <li>Solid understanding of object-oriented software design and programming</li>
                <li>Comfortable with Git or equivalent version control software</li>
            </ul>
        
            <div class ="stickyContent">
                <button type="button">Apply Now</button>
            </div>
        </div>
        );
    }
    return(
        <div></div>  
    );
}
