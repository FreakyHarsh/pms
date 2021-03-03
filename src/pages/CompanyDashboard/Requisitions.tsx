import { Box, Card, Grid, Typography, CardActions, Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { RequisitionProps } from '../../types/CompanyTypes/RequisitionProps';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../index';
import { useSelector } from 'react-redux';
import { formatToCurrency } from '../../utils/formatToCurrency';

function Requisitions() {
  const history = useHistory();
  const authState = useSelector((state: RootState) => state.authState);
  const [jobs, setJobs] = useState<RequisitionProps[]>();
  useEffect(() => {
    const getJobs = async () => {
      const jobs = await fetch(baseURL + '/companies/me/jobs', {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error));
      setJobs([...jobs]);
    };
    if (authState.token) getJobs();
  }, [authState.token]);
  return (
    <div>
      <Grid container spacing={2}>
        {jobs?.reverse().map(({ location, ctc, position, id }: RequisitionProps) => (
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
                  variant='contained'
                  size='small'
                  color='primary'
                  style={{ marginLeft: 'auto' }}
                  onClick={() => history.push('/company-dashboard/requisition-detail/' + id)}
                >
                  View
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Requisitions;
