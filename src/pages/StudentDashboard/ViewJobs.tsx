import { Grid } from '@material-ui/core';
import React from 'react';
import ViewJobCard from '../../components/ViewJobCard';
import { ViewJobCardProps } from '../../types/StudentTypes/ViewJobCardProps';
const sampleResponse: ViewJobCardProps[] = [
  {
    companyName: 'TCS',
    requisitionID: '#123123',
    jobLocation: 'Mumbai',
    jobSalary: 3.6,
    jobPosition: 'JavaScript Developer',
  },
  {
    companyName: 'LTI',
    requisitionID: '#322323',
    jobLocation: 'Chennai',
    jobSalary: 3.4,
    jobPosition: 'Data Analyst',
  },
  {
    companyName: 'CodeKage Private Ltd',
    requisitionID: '#12313',
    jobLocation: 'Remote',
    jobSalary: 10,
    jobPosition: 'Full-stack Developer',
  },
  {
    companyName: 'A Company with Really Long Name private limited cooperation',
    requisitionID: '#322323',
    jobLocation: 'Chennai',
    jobSalary: 3.4,
    jobPosition: 'Data Analyst',
  },
  {
    companyName: 'LTI',
    requisitionID: '#322323',
    jobLocation: 'Chennai',
    jobSalary: 3.4,
    jobPosition: 'Data Analyst',
  },
];

function ViewJobs() {
  return (
    <div>
      <Grid container spacing={2}>
        {sampleResponse.map(
          ({
            companyName,
            companyProfilePic,
            jobLocation,
            jobPosition,
            jobSalary,
            requisitionID,
          }: ViewJobCardProps) => (
            <Grid item xs={12} md={6} key={requisitionID + Math.random()}>
              <ViewJobCard
                companyName={companyName}
                requisitionID={requisitionID}
                jobLocation={jobLocation}
                jobSalary={jobSalary}
                jobPosition={jobPosition}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}

export default ViewJobs;
