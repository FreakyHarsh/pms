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

function StudentProfile() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box display='flex' justifyContent='center'>
      <Box p={2} className={classes.cardWidth}>
        <Card>
          <Box display='flex' p={2}>
            <Avatar
              alt='Remy Sharp'
              className={classes.large}
              src='https://randomuser.me/api/portraits/women/91.jpg'
            />
            <Typography
              variant='h6'
              noWrap
              style={{ padding: '1rem', fontFamily: 'Playfair Display' }}
            >
              Jessie Doe
            </Typography>
          </Box>
          <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
          <CardContent>
            <Box px={2}>
              <Typography paragraph noWrap>
                Phone number: 9980467133
              </Typography>
              <Typography paragraph noWrap>
                UIN number: 161S007
              </Typography>
              <Typography paragraph noWrap>
                Gender: Male
              </Typography>
              <Typography style={{ maxWidth: '80%' }} paragraph noWrap>
                Email: harsh.boricha2015@gmail.com
              </Typography>
              <Typography paragraph>Department: Computer Science</Typography>
              <Typography paragraph>Program: B.E</Typography>
              <Typography paragraph>
                Current Address: Lorem Epson, Loremlkf
                lksjfjkslfjfdljfsdlkjflksjdflkjsdlkfsjslkdfjslkd
              </Typography>
              <Typography paragraph>
                Home Address: Lorem Epson, Loremlkf lksjfjkslfjfdljfsdlkjflksjdflkjsdlkfsjslkdfjslkd
              </Typography>
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
