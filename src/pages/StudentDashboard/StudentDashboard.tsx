import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect, Route, useHistory, Switch, useRouteMatch } from 'react-router-dom';
import ViewJobs from './ViewJobs';
import { toSnakeCase } from '../../utils/toSnakeCase';
import ViewOffers from './ViewOffers';
import ApplicationStatus from './ApplicationStatus';
import UploadResume from './UploadResume';
import StudentProfile from './StudentProfile';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActionTypes } from '../../store/reducers/AuthReducer/auth.actionTypes';
import { onLogout } from '../../store/actions/actions.auth';
import { StudentState } from '../../store/reducers/StudentReducer/student.reducer';

function StudentDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('View Jobs');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const authState = useSelector((state: any) => state.authState);
  const studentState: StudentState = useSelector((state: any) => state.studentState);
  const drawer = (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        height: '100%',
        color: theme.palette.primary.contrastText,
      }}
    >
      <List>
        <ListItem
          button
          key='dp'
          className={classes.select}
          onClick={() => {
            setSelectedTab('Profile');
            mobileOpen && setMobileOpen(!mobileOpen);
            history.push('/student-dashboard/profile-details');
          }}
          selected={'Profile' === selectedTab}
        >
          <ListItemIcon>
            <Avatar
              alt={studentState.firstName.toUpperCase()}
              className={classes.large}
              src={baseURL + studentState.avatar}
            />
          </ListItemIcon>
          <Typography
            variant='h6'
            noWrap
            style={{ padding: '1rem', fontFamily: 'Playfair Display' }}
          >
            {studentState.firstName + ' ' + studentState.lastName}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['View Jobs', 'View Offers', 'Application Status', 'Update Resume', 'Logout'].map(
          (text) => (
            <ListItem
              button
              key={text}
              className={classes.select}
              onClick={() => {
                if (text === 'Logout') {
                  dispatch(onLogout());
                  history.push('/login');
                  return;
                }
                setSelectedTab(text);
                mobileOpen && setMobileOpen(!mobileOpen);
                history.push(match.url + '/' + toSnakeCase(text));
              }}
              selected={text === selectedTab}
            >
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Hidden smUp>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              Student Dashboard
            </Typography>
          </Toolbar>
        </Hidden>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <Hidden smUp>
          <div className={classes.toolbar} />
        </Hidden>
        {authState.isLogin ? (
          <Switch>
            <Route path='/student-dashboard' exact>
              <Redirect to='/student-dashboard/view-jobs' />
            </Route>
            <Route path='/student-dashboard/view-jobs'>
              <ViewJobs />
            </Route>
            <Route path='/student-dashboard/view-offers'>
              <ViewOffers />
            </Route>
            <Route path='/student-dashboard/application-status'>
              <ApplicationStatus />
            </Route>
            <Route path='/student-dashboard/update-resume'>
              <UploadResume />
            </Route>
            <Route path='/student-dashboard/profile-details'>
              <StudentProfile />
            </Route>
          </Switch>
        ) : (
          'Please login aagain'
        )}
      </main>
    </div>
  );
}
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    toolbar: theme.mixins.toolbar,
    select: {
      '&.MuiListItem-root.Mui-selected': {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.main,
      },
    },
  })
);

export default StudentDashboard;
