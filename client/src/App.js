
import {Jobs} from './components/jobs/Jobs';
import {CreateJob} from './components/jobs/CreateJob';
import React, { Component, Fragment } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './components/Header';
import Login from './components/auth/Login';
import { Register } from './components/auth/Register';
import { ApplyJob } from './components/jobs/ApplyJob';
import { JobsApplied } from './components/jobs/JobsApplied';
import { JobsPosted } from './components/jobs/JobsPosted';

export default class App extends Component {
    render() {
        return (
            <div>
               <BrowserRouter>
                  <Fragment>
                      <Header />
                      <Route exact path = "/login" component = {Login} />
                      <Route exact path="/applyjob" component = {ApplyJob} />
                      <Route exact path = "/createjob" component = {CreateJob} />
                      <Route exact path ="/appliedjobs" component = {JobsApplied} />
                      <Route exact path ="/jobsPosted" component = {JobsPosted} />
                      <Route exact path = "/" component = {Jobs} />
                      <Route exact path ="/register" component = {Register} />
                  </Fragment>
               </BrowserRouter>
            </div>
        )
    }
}
