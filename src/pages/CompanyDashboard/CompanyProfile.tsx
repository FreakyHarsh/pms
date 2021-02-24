import {
  useTheme,
  Box,
  Card,
  Avatar,
  Typography,
  Divider,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../index';

function CompanyProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const companyState = useSelector((state: RootState) => state.companyState);
  return (
    <Box display='flex' justifyContent='center'>
      <Box p={2} className={classes.cardWidth}>
        <Card>
          <Box display='flex' p={2}>
            <Avatar
              alt={companyState.name}
              className={classes.large}
              src={baseURL + companyState.avatar}
            />
            <Typography
              variant='h6'
              noWrap
              style={{ padding: '1rem', fontFamily: 'Playfair Display' }}
            >
              {companyState.name}
            </Typography>
          </Box>
          <Divider variant='middle' style={{ backgroundColor: theme.palette.primary.main }} />
          <CardContent>
            <Box px={2}>
              <Typography paragraph noWrap>
                Phone number: {companyState.phoneNumber}
              </Typography>
              <Typography paragraph noWrap>
                Registration number: {companyState.registrationNumber}
              </Typography>
              <Typography paragraph noWrap>
                GST Number: {companyState.gstNumber}
              </Typography>
              <Typography style={{ maxWidth: '80%' }} paragraph noWrap>
                Email: {companyState.email}
              </Typography>
              <Typography style={{ maxWidth: '80%' }} paragraph noWrap>
                WebsiteLink: {companyState.webSiteURL}
              </Typography>
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
export default CompanyProfile;
