import { Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../..";
import ViewJobCard from "../../components/ViewJobCard";
import { JobDetailProp } from "../../types/Jobs/JobDetailProps";

function ViewJobs() {
  const [jobs, setJobs] = useState<JobDetailProp[]>();
  const [allJobs, setAllJobs] = useState<JobDetailProp[]>();
  const [appliedJobs, setAppliedJobs] = useState<any>();
  const [filteredJobs, setFilteredJobs] = useState<any>();
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);

  const authState = useSelector((state: RootState) => state.authState);
  const studentState = useSelector((state: RootState) => state.studentState);

  useEffect(() => {
    const getAllJobs = async () => {
      const data = await fetch(baseURL + "/jobs")
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      console.log("alljobs>>>", data);
      setAllJobs(data);
    };
    getAllJobs();
  }, []);

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
      setAppliedJobs(post);
      console.log("appliedJOBS>>>", post);
    };
    getApplications();
  }, [refresh]);

  useEffect(() => {
    const appliedJobsID = appliedJobs?.map(({ job }: any) => job.id);
    const remainingJobsToShow = allJobs?.filter((job) => !appliedJobsID.includes(job.id));
    setJobs(remainingJobsToShow);
  }, [appliedJobs?.length, refresh]);
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
            minCGPA,
          }: JobDetailProp) => {
            if (company.name.toLowerCase().includes(search.toLowerCase())) {
              return (
                <Grid item xs={12} md={6} key={id}>
                  {studentState.cgpa ? (
                    <ViewJobCard
                      companyName={company.name}
                      companyProfilePic={baseURL + company.avatar}
                      requisitionID={id}
                      jobLocation={location}
                      jobSalary={ctc}
                      jobPosition={position}
                      jobDescription={description}
                      jobLastDayOfSummission={lastDayOfSummission}
                      onRefreshList={() => setRefresh(!refresh)}
                      isApplicable={studentState?.cgpa > minCGPA}
                      minCGPArequired={minCGPA}
                    />
                  ) : (
                    <div>To view Jobs, Edit you CGPA in profile tab.</div>
                  )}
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
