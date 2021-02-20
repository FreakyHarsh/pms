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
  CardActions,
  Button,
  IconButton,
  Collapse,
} from '@material-ui/core';
import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { ViewJobCardProps } from '../types/StudentTypes/ViewJobCardProps';

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
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box mb={2}>
      <Card raised>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.large} src={companyProfilePic}>
              T
            </Avatar>
          }
          title={
            <Typography variant='body1' color='primary'>
              {companyName}
            </Typography>
          }
          subheader='September 14, 2016'
        />
        <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
        <CardContent style={{ paddingBottom: 0 }}>
          <Box style={{ paddingLeft: '1rem' }}>
            <Typography variant='body1' paragraph noWrap>
              Position: {jobPosition}
            </Typography>
            <Typography variant='body1' paragraph noWrap>
              Salary: {jobSalary} LPA
            </Typography>
            <Typography variant='body1' noWrap>
              Location: {jobLocation}
            </Typography>
          </Box>
          <Box textAlign='end'>
            <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label='show more'>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph align='center'>
              Job Description
            </Typography>
            <Box p={1}>
              <Typography variant='body2' paragraph>
                Job Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi placeat
                facere esse optio nisi dolorem culpa corporis, minus nobis magni! Perspiciatis
                numquam veniam consectetur consequatur culpa atque? Impedit, reprehenderit.
              </Typography>
            </Box>
            <Box textAlign='end'>
              <Button variant='contained' size='small' color='primary'>
                Apply
              </Button>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}

export default ViewJobCard;
