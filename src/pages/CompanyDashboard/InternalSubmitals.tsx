import { Grid, Card, Box, Typography, CardActions, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { RequisitionProps } from '../../types/CompanyTypes/RequisitionProps';
import { JobDetailProp } from '../../types/Jobs/JobDetailProps';
import { formatToCurrency } from '../../utils/formatToCurrency';
import { RootState } from '../../index';
import { useSelector } from 'react-redux';

function InternalSubmitals() {
  const history = useHistory();
  const match = useRouteMatch();
  const [jobs, setJobs] = useState<JobDetailProp[]>();
  const authState = useSelector((state: RootState) => state.authState);

  useEffect(() => {
    const getJobs = async () => {
      const data = await fetch(baseURL + '/companies/me/jobs', {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
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
        {jobs?.map(({ location, ctc, position, id }: RequisitionProps) => (
          <Grid item xs={12} md={6} key={id}>
            <Card raised>
              <Box p={2} ml={1}>
                <Typography variant='body2' paragraph noWrap>
                  Requisition ID: {id}
                </Typography>
                <Typography variant='body2' paragraph noWrap>
                  Position: {position}
                </Typography>
                <Typography variant='body2' paragraph noWrap>
                  Salary: ₹ {formatToCurrency(ctc)}
                </Typography>
                <Typography variant='body2' noWrap>
                  Location: {location}
                </Typography>
              </Box>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  onClick={() => history.push(match.path + '/' + id)}
                  style={{ marginLeft: 'auto' }}
                >
                  Check Submital
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default InternalSubmitals;
