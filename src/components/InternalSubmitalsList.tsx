import { Grid, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { InternalSubmitalCardProps } from '../types/CompanyTypes/InternalSubmitalCardProps';
import InternalSubmitalCard from './InternalSubmitalCard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useRouteMatch, useParams } from 'react-router-dom';
import { JobDetailProp } from '../types/Jobs/JobDetailProps';

function InternalSubmitalsList() {
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const [jobs, setJobs] = useState<any[]>();
  useEffect(() => {
    const getJobs = async () => {
      const data = await fetch(baseURL + '/jobs/' + params.id + '/applications')
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
      {/* <IconButton onClick={() => history.replace('/company-dashboard/internal-submitals')}>
        <ArrowBackIcon />
      </IconButton> */}
      <Grid container spacing={2}>
        {jobs?.map(
          ({
            status,
            student: {
              id,
              firstName,
              lastName,
              uinNumber,
              sem1,
              sem2,
              sem3,
              sem4,
              sem5,
              sem6,
              sem7,
              sem8,
              resume,
            },
          }: any) => {
            let count = 1;
            let total = sem1 !== undefined ? sem1 : 0;
            if (sem2 !== undefined) {
              count = 2;
              total += sem2;
            }
            if (sem3 !== undefined) {
              count = 3;
              total += sem3;
            }
            if (sem4 !== undefined) {
              count = 4;
              total += sem4;
            }
            if (sem5 !== undefined) {
              count = 5;
              total += sem5;
            }
            if (sem6 !== undefined) {
              count = 6;
              total += sem6;
            }
            if (sem7 !== undefined) {
              count = 7;
              total += sem7;
            }
            if (sem8 !== undefined) {
              count = 8;
              total += sem8;
            }
            let cgpi = total / count;
            return (
              <Grid item xs={12} md={6} key={uinNumber}>
                <InternalSubmitalCard
                  studentName={firstName + ' ' + lastName}
                  uinNumber={uinNumber}
                  cgpi={cgpi.toString()}
                  resume={baseURL + resume}
                  studentId={id}
                  onApproved={() => (status = 'approved')}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </div>
  );
}

export default InternalSubmitalsList;
