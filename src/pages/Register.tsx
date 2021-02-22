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

  const [registerType, setRegisterType] = React.useState('student');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterType((event.target as HTMLInputElement).value);
  };

  return (
    <Grid container style={{ flex: 1, minHeight: '100vh' }}>
      <Hidden smDown>
        <Grid
          item
          md={4}
          style={{ backgroundColor: theme.palette.primary.main, alignItems: 'stretch' }}
        >
          <Box display='flex' height='100%' alignItems='center' p={3}>
            <TermsAndConditions />
          </Box>
        </Grid>
      </Hidden>

      <Grid item md={8} xs={12} style={{ height: '100%' }}>
        <Box p={3} height='100%'>
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
                value={registerType}
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

            <Box mt={4}>
              {registerType === 'student' ? <StudentRegister /> : <CompanyRegister />}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
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
