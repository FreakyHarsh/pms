import { Grid, Card, Box, Typography, CardActions, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { RequisitionProps } from '../../types/CompanyTypes/RequisitionProps';
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
function InternalSubmitals() {
  const history = useHistory();

  return (
    <div>
      <Grid container spacing={2}>
        {sampleResponse.map(({ location, salary, position, requisitionID }: RequisitionProps) => (
          <Grid item xs={12} md={6} key={requisitionID + Math.random()}>
            <Card raised>
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
                <Button size='small' color='primary' style={{ marginLeft: 'auto' }}>
                  Check Submitals
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
