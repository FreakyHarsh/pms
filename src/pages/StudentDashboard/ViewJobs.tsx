import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ViewJobCard from '../../components/ViewJobCard';
import { ViewJobCardProps } from '../../types/StudentTypes/ViewJobCardProps';
import { JobDetailProp } from '../../types/Jobs/JobDetailProps';

function ViewJobs() {
  const [jobs, setJobs] = useState<JobDetailProp[]>();
  useEffect(() => {
    const getJobs = async () => {
      const data = await fetch(baseURL + '/jobs')
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      console.log(data);
      setJobs(data);
    };
    getJobs();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {jobs?.map(
          ({
            id,
            ctc,
            location,
            company,
            position,
            description,
            lastDayOfSummission,
          }: JobDetailProp) => (
            <Grid item xs={12} md={6} key={id}>
              <ViewJobCard
                companyName={company.name}
                companyProfilePic={baseURL + company.avatar}
                requisitionID={id}
                jobLocation={location}
                jobSalary={ctc}
                jobPosition={position}
                jobDescription={description}
                jobLastDayOfSummission={lastDayOfSummission}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}

export default ViewJobs;
