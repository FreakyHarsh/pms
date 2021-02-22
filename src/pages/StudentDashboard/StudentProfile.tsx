import {
  Avatar,
  Box,
  Card,
  makeStyles,
  useTheme,
  Typography,
  createStyles,
  Theme,
  Divider,
  IconButton,
  CardContent,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { StudentState } from '../../store/reducers/StudentReducer/student.reducer';
import { useSelector } from 'react-redux';

function StudentProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const studentState: StudentState = useSelector((state: any) => state.studentState);

  return (
    <Box display='flex' justifyContent='center'>
      <Box p={2} className={classes.cardWidth}>
        <Card>
          <Box display='flex' p={2}>
            <Avatar
              alt={studentState.firstName}
              className={classes.large}
              src={baseURL + studentState.avatar}
            />
            <Typography
              variant='h6'
              noWrap
              style={{ padding: '1rem', fontFamily: 'Playfair Display' }}
            >
              {studentState.firstName + ' ' + studentState.lastName}
            </Typography>
          </Box>
          <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
          <CardContent>
            <Box px={2}>
              <Typography paragraph noWrap>
                Phone number: {studentState.phoneNumber}
              </Typography>
              <Typography paragraph noWrap>
                UIN number: {studentState.uinNumber}
              </Typography>
              <Typography paragraph noWrap>
                Gender: {studentState.gender}
              </Typography>
              <Typography style={{ maxWidth: '80%' }} paragraph noWrap>
                Email: {studentState.email}
              </Typography>
              <Typography paragraph>Department: {studentState.department}</Typography>
              <Typography paragraph>Program: {studentState.program}</Typography>
              <Typography paragraph>Current Address: {studentState.currentAddress}</Typography>
              <Typography paragraph>Home Address: {studentState.homeAddress}</Typography>
              <Grid container spacing={3} style={{ marginBottom: '.5rem' }}>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 1' variant='outlined' size='small' />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 2' variant='outlined' size='small' />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 3' variant='outlined' size='small' />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 4' variant='outlined' size='small' />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 5' variant='outlined' size='small' />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 6' variant='outlined' size='small' />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 7' variant='outlined' size='small' />
                </Grid>
                <Grid item xs={4} md={3}>
                  <TextField label='Sem 8' variant='outlined' size='small' />
                </Grid>
              </Grid>
              <Typography paragraph>CGPI: 7.0</Typography>
              <Button variant='contained' color='secondary'>
                Update Details
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    cardWidth: {
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '80%',
      },
    },
  })
);

export default StudentProfile;
