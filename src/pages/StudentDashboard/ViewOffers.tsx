import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../..';
import ViewOfferCard from '../../components/ViewOfferCard';

function ViewOffers() {
  const authState = useSelector((state: RootState) => state.authState);
  const [applications, setApplications] = useState<any>();
  useEffect(() => {
    const getApplications = async () => {
      const post = await fetch(baseURL + '/students/me/applications', {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      setApplications(post);
      console.log(post);
    };

    getApplications();
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {applications?.map((application: any) => {
          if (application.status === 'approved')
            return (
              <Grid item xs={12} md={6} key={application.job.id}>
                <ViewOfferCard
                  companyName={application.company.name}
                  requisitionID={application.job.id}
                  jobSalary={application.job.ctc}
                  jobPosition={application.job.position}
                  companyProfilePic={application.company.avatar}
                  companyWebsite={application.company.webSiteURL}
                />
              </Grid>
            );
        })}
      </Grid>
    </div>
  );
}
export default ViewOffers;
