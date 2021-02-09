import { createStyles, Grid, makeStyles, Theme, useTheme } from '@material-ui/core';
import React from 'react';
import ViewOfferCard from '../../components/ViewOfferCard';
import { ViewOfferCardProps } from '../../types/ViewOfferCardProps';
const sampleResponse: ViewOfferCardProps[] = [
  {
    companyName: 'TCS',
    requisitionID: '#123123',
    jobSalary: 3.6,
    jobPosition: 'JavaScript Developer',
  },
];
function ViewOffers() {
  return (
    <div>
      <Grid container spacing={2}>
        {sampleResponse.map(
          ({ companyName, jobPosition, jobSalary, requisitionID }: ViewOfferCardProps) => (
            <Grid item xs={12} md={6} key={requisitionID + Math.random()}>
              <ViewOfferCard
                companyName={companyName}
                requisitionID={requisitionID}
                jobSalary={jobSalary}
                jobPosition={jobPosition}
              />
            </Grid>
          )
        )}
      </Grid>
    </div>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);
export default ViewOffers;
