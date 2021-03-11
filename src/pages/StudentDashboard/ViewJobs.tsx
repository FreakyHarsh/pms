import { Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ViewJobCard from "../../components/ViewJobCard";
import { JobDetailProp } from "../../types/Jobs/JobDetailProps";

function ViewJobs() {
  const [jobs, setJobs] = useState<JobDetailProp[]>();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getJobs = async () => {
      const data = await fetch(baseURL + "/jobs")
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
        <Grid item xs={12} style={{ textAlign: "end" }}>
          <TextField
            id='outlined-basic'
            label='Search'
            size='small'
            variant='outlined'
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </Grid>
        {jobs?.map(
          ({
            id,
            ctc,
            location,
            company,
            position,
            description,
            lastDayOfSummission,
          }: JobDetailProp) => {
            if (company.name.toLowerCase().includes(search.toLowerCase())) {
              return (
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
              );
            }
          }
        )}
      </Grid>
    </div>
  );
}

export default ViewJobs;
