import { Box, Card, Grid, Typography, CardActions, Button } from '@material-ui/core';
import React from 'react';
import ViewJobCard from '../../components/ViewJobCard';
import { RequisitionProps } from '../../types/CompanyTypes/RequisitionProps';
import { ViewJobCardProps } from '../../types/StudentTypes/ViewJobCardProps';
import { useHistory } from 'react-router-dom';
const sampleResponse: RequisitionProps[] = [
  {
    requisitionID: '#123123',
    location: 'Mumbai',
    salary: 3.6,
    position: 'JavaScript Developer',
  },
  {
    requisitionID: '#123123',
    location: 'Mumbai',
    salary: 3.6,
    position: 'JavaScript Developer',
  },
];
function Requisitions() {
  const history = useHistory();
  return (
    <div>
      <Grid container spacing={2}>
        {sampleResponse.map(({ location, salary, position, requisitionID }: RequisitionProps) => (
          <Grid item xs={12} md={6} key={requisitionID + Math.random()}>
            <Card raised onClick={() => history.replace('/company-dashboard/requisition-detail')}>
              <Box p={2} ml={1}>
                <Typography variant='body2' paragraph noWrap>
                  Requisition ID: #12312
                </Typography>
                <Typography variant='body2' paragraph noWrap>
                  Position: JavaScript Developer
                </Typography>
                <Typography variant='body2' paragraph noWrap>
                  Salary: 10 LPA
                </Typography>
                <Typography variant='body2' noWrap>
                  Location: Mumbai
                </Typography>
              </Box>
              <CardActions>
                <Button
                  variant='contained'
                  size='small'
                  color='primary'
                  style={{ marginLeft: 'auto' }}
                >
                  Apply
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
