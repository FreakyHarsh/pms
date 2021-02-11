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
          <Box p={3}>
            <Box px={2} display='flex' justifyContent='space-between' alignItems='center'>
              <Typography>Phone number: 9980467133</Typography>
              <IconButton>
                <EditIcon style={{ color: theme.palette.primary.main, fontSize: '1.3rem' }} />
              </IconButton>
            </Box>
            <Box px={2} display='flex' justifyContent='space-between' alignItems='center'>
              <Typography>UIN number: 161S007</Typography>
              <IconButton>
                <EditIcon style={{ color: theme.palette.primary.main, fontSize: '1.3rem' }} />
              </IconButton>
            </Box>
            <Box px={2} display='flex' justifyContent='space-between' alignItems='center'>
              <Typography>Gender: Male</Typography>
              <IconButton>
                <EditIcon style={{ color: theme.palette.primary.main, fontSize: '1.3rem' }} />
              </IconButton>
            </Box>
            <Box px={2} display='flex' justifyContent='space-between' alignItems='center'>
              <Typography style={{ maxWidth: '80%' }} noWrap>
                Email: harsh.boricha2015@gmail.com
              </Typography>
              <IconButton>
                <EditIcon style={{ color: theme.palette.primary.main, fontSize: '1.3rem' }} />
              </IconButton>
            </Box>
          </Box>
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
