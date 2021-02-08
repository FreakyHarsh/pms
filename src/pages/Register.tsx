import {
  Box,
  createStyles,
  FormControlLabel,
  Grid,
  Hidden,
  makeStyles,
  Radio,
  RadioGroup,
  responsiveFontSizes,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core';
import React from 'react';
import CompanyRegister from '../components/CompanyRegister';
import StudentRegister from '../components/StudentRegister';
import TermsAndConditions from '../components/TermsAndConditions';

function Register() {
  let theme = useTheme();
  theme = responsiveFontSizes(theme);
  const classes = useStyles();

  const [register, setRegister] = React.useState('student');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegister((event.target as HTMLInputElement).value);
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

        <Grid item md={8} xs={12} style={{ height: '100%' }}>
          <Box p={4} height='100%'>
            <Box mb={2}>
              <Typography
                variant='h4'
                className={classes.headerTextAlign}
                style={{ fontFamily: 'Playfair Display' }}
              >
                Register
              </Typography>
            </Box>
            <Box component='section'>
              <Box p={1} pl={3} style={{ backgroundColor: theme.palette.primary.main }}>
                <RadioGroup
                  aria-label='quiz'
                  name='quiz'
                  value={register}
                  onChange={handleRadioChange}
                  style={{ display: 'block', color: '#fff' }}
                >
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

              <Box mt={4}>{register === 'student' ? <StudentRegister /> : <CompanyRegister />}</Box>
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

export default Register;
