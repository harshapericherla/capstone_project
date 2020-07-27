import React, { Component } from 'react';
import { JOBS_APPLIED } from '../../graphql/queries';
import { useLazyQuery } from '@apollo/react-hooks';

export const JobsApplied = () => {

    const [jobsAppliedQ, { data }] = useLazyQuery(JOBS_APPLIED);
    console.log(data);
    return (
        <p>jobapplied</p>
    );
}
