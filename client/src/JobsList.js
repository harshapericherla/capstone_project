import React, { Component,Fragment } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import '../assets/sass/list.scss';

const GET_LAUNCHES = gql`
query jobQuery{
    jobs{
      _id
      name
      location
      type
      description
      companyName
      posted_by
      {
        _id
        name
      }
    }
  }
`;


const JobsList = () => {
    const { data, loading, error } = useQuery(GET_LAUNCHES);
  
    if (loading) return <p>Loading</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
  
    return (
      <Fragment>
        <div id ="flexContent">
          <div class = "abc">
        {data.jobs && data.jobs.map(job => (
          
            <div class = "listContent">
              <div id = "cards">
                <div class = "flex-card">
                  <div id = "circle">
                    <div class = "circle">
                      <span>A</span>
                    </div>
                    <div class = "name">
                      <p>{job.companyName}</p>
                      <div class = "location">
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </div>
                  <div class ="description">
                            <span class = "role">{job.name}</span>
                            <span class = "desc">{job.description}</span>
                  </div>
                  <hr></hr>
                  <div class= "type">
                            <span class = "jobtype">{job.type}</span>
                            <span class = "time">6 hours ago</span>
                        </div>
                </div>
              </div>
            </div> 
        ))}
        </div>
        <div class = "showJobContent">
                <div id = "stickyContent">
                    <span class = "jobName">
                        <h1>Front End Developer</h1>
                    </span>
                    <span class = "companyName">
                        <p>Deep Treeker Inc.</p>
                    </span>
                    <span class = "location">
                        <p>Kitchener, ON, canada</p>
                    </span>
                </div>
                
                <div id ="content2">
                    <h2>Job Details</h2>
                    <h3>Job Type</h3>
                    <span class ="jobType">
                        <p>Full-Time</p>
                    </span>
                </div>
                <hr></hr>
                <h3>Full Job Description</h3>
                <p>At Deep Trekker we work hard and get stuff done, but we have fun doing it. We’re versatile and aren’t afraid to take on new challenges and learn new tricks. With innovative and disciplined engineering design, Deep Trekker has experienced continued success and growth since our inception.</p>
        
                <p>We are currently seeking a versatile and talented Front End Developer with an embedded focus. If you are a highly motivated developer who is passionate about developing mobile robots and underwater drones this might be the job for you. In this role, you will work with little supervision to develop in an embedded Linux environment for new products.</p>
                
                <h3>Responsibiltes:</h3>
                <ul class="response">
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
              </div>
      </Fragment>
    );
  };
  
  export default JobsList;