import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  Divider,
  CardContent,
  Box,
  useTheme,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { ViewJobCardProps } from '../types/ViewJobCardProps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

function ViewJobCard({
  companyName,
  requisitionID,
  companyProfilePic,
  jobLocation,
  jobPosition,
  jobSalary,
}: ViewJobCardProps) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box mb={2}>
      <Card raised onClick={() => console.log(`onclick goto /view-job/detail/:${requisitionID}`)}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.large} src={companyProfilePic}>
              T
            </Avatar>
          }
          title={
            <Typography variant='body1' color='primary' noWrap style={{ maxWidth: '80%' }}>
              {companyName}
            </Typography>
          }
          subheader='September 14, 2016'
        />
        <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
        <CardContent>
          <Box style={{ paddingLeft: '1rem' }}>
            <Typography variant='body2' paragraph noWrap>
              Position: {jobPosition}
            </Typography>
            <Typography variant='body2' paragraph noWrap>
              Salary: {jobSalary} LPA
            </Typography>
            <Typography variant='body2' noWrap>
              Location: {jobLocation}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ViewJobCard;
