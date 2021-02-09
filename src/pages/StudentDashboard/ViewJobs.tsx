import React from 'react';
import ViewJobCard from '../../components/ViewJobCard';
import { ViewJobCardProps } from '../../types/ViewJobCardProps';
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
    companyName: 'LTI',
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
      {sampleResponse.map(
        ({
          companyName,
          companyProfilePic,
          jobLocation,
          jobPosition,
          jobSalary,
          requisitionID,
        }: ViewJobCardProps) => (
          <ViewJobCard
            key={requisitionID + Math.random()}
            companyName={companyName}
            requisitionID={requisitionID}
            jobLocation={jobLocation}
            jobSalary={jobSalary}
            jobPosition={jobPosition}
          />
        )
      )}
    </div>
  );
}

export default ViewJobs;
