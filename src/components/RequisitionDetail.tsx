import {
  Box,
  Card,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  IconButton,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useParams } from 'react-router-dom';
import { RequisitionProps } from '../types/CompanyTypes/RequisitionProps';
import { Company } from '../types/CompanyTypes/Company';
import { getRequisitionDetail } from '../utils/getRequisitionDetail';
import { JobDetailProp } from '../types/Jobs/JobDetailProps';
import { RootState } from '../index';
import { useSelector } from 'react-redux';

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
  const params = useParams<{ id: string }>();
  const [job, setJob] = useState<JobDetailProp>();
  const authState = useSelector((state: RootState) => state.authState);

  const onDeleteJob = async (id: any) => {
    const answer: boolean = window.confirm('Do you want to delete this job?');
    if (answer) {
      const post = await fetch(baseURL + '/jobs/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          history.push('/company-dashboard/requisitions');
          return data;
        })
        .catch((error) => console.error(error));
    }
    return;
  };
  const onEditJob = () => {
    history.push('/company-dashboard/create-requisition/' + params.id);
  };
  useEffect(() => {
    const getData = async () => {
      const JobDetail = await getRequisitionDetail(params.id);
      setJob(JobDetail);
    };
    getData();
  }, []);
  return (
    <div>
      <Card>
        <Box p={3}>
          <Typography paragraph noWrap>
            <span className={classes.title}>REQUISITION ID: </span>
            <span className={classes.reqId}>#{job?.id}</span>
          </Typography>
          <Typography paragraph noWrap>
            <span className={classes.title}>POSITION: </span>
            {job?.position}
          </Typography>
          <Typography paragraph noWrap>
            <span className={classes.title}>SALARY: </span>
            {job?.ctc}
          </Typography>
          <Typography paragraph noWrap>
            <span className={classes.title}>LOCATION: </span> {job?.location}
          </Typography>
          <Typography paragraph>
            <span className={classes.title}>NO OF POSITIONS: </span>
            {job?.openings}
          </Typography>
          <Typography paragraph>
            <span className={classes.title}>LAST DATE TO APPLY: </span> {job?.lastDayOfSummission}
          </Typography>
          <Typography paragraph>
            <span className={classes.title}>JOB DESCRIPTION: </span>
          </Typography>
          <Typography paragraph>{job?.description}</Typography>
          <Box textAlign='end'>
            <IconButton className={classes.editBtn} onClick={onEditJob}>
              <EditIcon />
            </IconButton>
            <IconButton className={classes.deleteBtn} onClick={() => onDeleteJob(job?.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </div>
  );
}

export default RequisitionDetail;
