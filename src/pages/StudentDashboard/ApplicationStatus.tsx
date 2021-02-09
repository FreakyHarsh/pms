import { Grid } from '@material-ui/core';
import React from 'react';
import ApplicationStatusCard from '../../components/ApplicationStatusCard';
import { ViewJobCardProps } from '../../types/ViewJobCardProps';
import { ApplicationStatusCardProps } from '../../types/ApplicationStatusCardProps';
const sampleResponse: ApplicationStatusCardProps[] = [
  {
    companyName: 'TCS',
    requisitionID: '#123123',
    location: 'Mumbai',
    salary: 3.6,
    position: 'JavaScript Developer',
    status: 'Approved by TPO',
  },
  {
    companyName: 'TCS',
    requisitionID: '#123123',
    location: 'Mumbai',
    salary: 3.6,
    position: 'JavaScript Developer',
    status: 'Approved by TPO',
  },
  {
    companyName: 'TCS',
    requisitionID: '#123123',
    location: 'Mumbai',
    salary: 3.6,
    position: 'JavaScript Developer',
    status: 'Approved by TPO',
  },
];
function ApplicationStatus() {
  return (
    <div>
      <Grid container spacing={2}>
        {sampleResponse.map(
          ({
            companyName,
            companyProfilePic,
            location,
            position,
            salary,
            status,
            requisitionID,
          }: ApplicationStatusCardProps) => (
            <Grid item xs={12} md={6} key={requisitionID + Math.random()}>
              <ApplicationStatusCard
                companyName={companyName}
                requisitionID={requisitionID}
                location={location}
                salary={salary}
                position={position}
                status={status}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}

export default ApplicationStatus;
