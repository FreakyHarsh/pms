import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../..";
import ApplicationStatusCard from "../../components/ApplicationStatusCard";

function ApplicationStatus() {
  const authState = useSelector((state: RootState) => state.authState);
  const [applications, setApplications] = useState<any>();
  useEffect(() => {
    const getApplications = async () => {
      const post = await fetch(baseURL + "/students/me/applications", {
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
        {applications?.map((application: any) => (
          <Grid item xs={12} md={6} key={application.job.id}>
            <ApplicationStatusCard
              companyName={application.company.name}
              requisitionID={application.job.id}
              location={application.job.location}
              salary={application.job.ctc}
              position={application.job.position}
              status={application.status}
              companyProfilePic={baseURL + application.company.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ApplicationStatus;
