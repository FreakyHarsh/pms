import {
  Grid,
  Hidden,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  Button,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import TermsAndConditions from '../components/TermsAndConditions';
import { capitalizeFirstWord } from '../utils/capitalizeFirstWord';

function Login() {
  const [login, setLogin] = useState('student');
  const classes = useStyles();
  const theme = useTheme();
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <Grid container style={{ height: '100vh' }}>
        <Hidden smDown>
          <Grid item md={4} style={{ backgroundColor: theme.palette.primary.main, height: '100%' }}>
            <Box display='flex' height='100%' alignItems='center' p={3}>
              <TermsAndConditions />
            </Box>
          </Grid>
        </Hidden>

        <Grid item md={8} xs={12}>
          <Box p={4}>
            <Box mb={1} style={{ fontFamily: 'Playfair Display' }}>
              <Typography variant='h4' className={classes.headerTextAlign}>
                Login
              </Typography>
            </Box>
            <Box component='section'>
              <Box p={1} pl={3} style={{ backgroundColor: theme.palette.primary.main }}>
                <RadioGroup
                  aria-label='quiz'
                  name='quiz'
                  value={login}
                  onChange={handleRadioChange}
                  style={{ display: 'block', color: '#fff' }}
                >
                  <Typography component='span' style={{ marginRight: '1rem' }}>
                    I am a :{' '}
                  </Typography>
                  <FormControlLabel
                    value='student'
                    control={<Radio style={{ color: '#FFF' }} />}
                    label={<Typography>Student</Typography>}
                  />
                  <FormControlLabel
                    value='company'
                    control={<Radio style={{ color: '#FFF' }} />}
                    label={<Typography>Company</Typography>}
                    style={{ marginLeft: '1rem' }}
                  />
                </RadioGroup>
              </Box>

              <Box mt={4}>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <TextField
                      label={capitalizeFirstWord(login) + ' mail'}
                      variant='outlined'
                      size='small'
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField label='Password' variant='outlined' size='small' fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Box textAlign='end'>
                      <Button color='secondary' variant='contained'>
                        <Typography variant='button'>Submit</Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerTextAlign: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
  })
);

export default Login;
