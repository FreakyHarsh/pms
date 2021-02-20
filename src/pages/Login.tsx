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
import React, { useEffect, useState } from 'react';
import TermsAndConditions from '../components/TermsAndConditions';
import { capitalizeFirstWord } from '../utils/capitalizeFirstWord';
import { useDispatch } from 'react-redux';
import { AuthActionTypes } from '../store/reducers/AuthReducer/auth.actionTypes';
import { getStudentLogin } from '../utils/studentLogin';
import { useHistory } from 'react-router-dom';
import { setAuthTokens } from '../store/actions/actions.auth';

function Login() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [login, setLogin] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<{ key: string; message: string; status: number }>();
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin((event.target as HTMLInputElement).value);
  };
  const dispatch = useDispatch();
  const onStudentLogin = async () => {
    const response: any = await getStudentLogin(email, password);
    console.log(response);
    if (response.accessToken) {
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      dispatch(setAuthTokens(response));
      history.replace('/student-dashboard');
    }
    response?.status === 400 && setError(response);
    response?.status === 401 && setError(response);
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
              <Box p={1} style={{ backgroundColor: theme.palette.primary.main }}>
                <RadioGroup
                  aria-label='quiz'
                  name='quiz'
                  value={login}
                  onChange={handleRadioChange}
                  style={{ display: 'block', color: '#fff' }}
                >
                  <Box display='flex' justifyContent='space-around'>
                    <FormControlLabel
                      value='student'
                      control={<Radio style={{ color: '#FFF' }} />}
                      label={<Typography>Student</Typography>}
                    />
                    <FormControlLabel
                      value='company'
                      control={<Radio style={{ color: '#FFF' }} />}
                      label={<Typography>Company</Typography>}
                    />
                  </Box>
                </RadioGroup>
              </Box>

              <Box mt={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label={capitalizeFirstWord(login) + ' mail'}
                      variant='outlined'
                      size='small'
                      fullWidth
                      onChange={(e) => setEmail(e.target.value)}
                      error={error?.key === 'email'}
                      helperText={error?.key === 'email' ? error?.message : ''}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      label='Password'
                      variant='outlined'
                      size='small'
                      fullWidth
                      onChange={(e) => setPassword(e.target.value)}
                      error={error?.key === 'password'}
                      helperText={error?.key === 'password' && error?.message}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>{error?.status === 401 && error?.message}</Typography>
                    <Box textAlign='end'>
                      <Button color='secondary' variant='contained' onClick={onStudentLogin}>
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
