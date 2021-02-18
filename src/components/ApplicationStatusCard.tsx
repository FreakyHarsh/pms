import classes from '*.module.css';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { ApplicationStatusCardProps } from '../types/StudentTypes/ApplicationStatusCardProps';
import { useTheme } from '@material-ui/core';

function ApplicationStatusCard({
  companyName,
  companyProfilePic,
  location,
  salary,
  status,
  requisitionID,
  position,
}: ApplicationStatusCardProps) {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <div>
      <Card raised>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.large} src={''}>
              T
            </Avatar>
          }
          title={
            <Typography variant='h5' color='primary'>
              {companyName}
            </Typography>
          }
        />
        <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
        <CardContent>
          <Box style={{ paddingLeft: '1rem' }}>
            <Typography variant='body2' paragraph noWrap>
              Position: {position}
            </Typography>
            <Typography variant='body2' paragraph noWrap>
              Salary: {salary} LPA
            </Typography>
            <Typography variant='body2' paragraph noWrap>
              Location: {location}
            </Typography>
            <Typography variant='body2' paragraph noWrap>
              Status: <span className={classes.approved}>{status}</span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    approved: {
      color: '#5DD86E',
      fontWeight: 700,
    },
    rejected: {
      color: '#F35050',
      fontWeight: 700,
    },
  })
);
export default ApplicationStatusCard;
