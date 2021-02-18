import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  Divider,
  CardContent,
  Box,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  Button,
} from '@material-ui/core';
import React from 'react';
import { ViewOfferCardProps } from '../types/StudentTypes/ViewOfferCardProps';

function ViewOfferCard({ companyName, jobPosition, jobSalary }: ViewOfferCardProps) {
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
              Position: {jobPosition}
            </Typography>
            <Typography variant='body2' paragraph noWrap>
              Salary: {jobSalary} LPA
            </Typography>
            <a href='*'>Connect with company</a>
          </Box>
          {/* <Button color='primary' onClick={() => console.log('gg')}>
            Connect with company
          </Button> */}
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
  })
);
export default ViewOfferCard;
