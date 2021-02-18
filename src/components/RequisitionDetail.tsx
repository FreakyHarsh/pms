import {
  Box,
  Card,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  IconButton,
} from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontWeight: 500,
    },
    reqId: {
      padding: '3px 1rem',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      marginLeft: '1rem',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
    deleteBtn: {
      backgroundColor: 'red',
      padding: '5px',
      color: theme.palette.primary.contrastText,
      '&:hover': {
        color: 'red',
      },
    },
    editBtn: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: '5px',
      marginRight: '1rem',
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
    backBtn: {
      marginBottom: '5px',
    },
  })
);
function RequisitionDetail() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div>
      <IconButton className={classes.backBtn} onClick={() => history.replace('/company-dashboard')}>
        <ArrowBackIcon />
      </IconButton>
      <Card>
        <Box p={3}>
          <Typography paragraph noWrap>
            <span className={classes.title}>REQUISITION ID: </span>
            <span className={classes.reqId}>#12313132</span>
          </Typography>
          <Typography paragraph noWrap>
            <span className={classes.title}>POSITION: </span>
            Java Developer
          </Typography>
          <Typography paragraph noWrap>
            <span className={classes.title}>SALARY: </span>10 LPA
          </Typography>
          <Typography paragraph noWrap>
            <span className={classes.title}>LOCATION: </span> Mumbai
          </Typography>
          <Typography paragraph>
            <span className={classes.title}>NO OF POSITIONS: </span> 2
          </Typography>
          <Typography paragraph>
            <span className={classes.title}>LAST DATE TO APPLY: </span> 2/10/2021
          </Typography>
          <Typography paragraph>
            <span className={classes.title}>JOB DESCRIPTION: </span>
          </Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quidem ab blanditiis
            impedit optio minus ratione doloribus, at, voluptate recusandae ex fuga cupiditate.
            Quis, inventore veritatis et neque adipisci dignissimos?
          </Typography>
          <Box textAlign='end'>
            <IconButton className={classes.editBtn}>
              <EditIcon />
            </IconButton>
            <IconButton className={classes.deleteBtn}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default RequisitionDetail;
