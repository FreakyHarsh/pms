import {
  useTheme,
  AppBar,
  Hidden,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ApplicationStatus from '../StudentDashboard/ApplicationStatus';
import StudentProfile from '../StudentDashboard/StudentProfile';
import UploadResume from '../StudentDashboard/UploadResume';
import ViewJobs from '../StudentDashboard/ViewJobs';
import ViewOffers from '../StudentDashboard/ViewOffers';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  window?: () => Window;
}
const drawer = <div>drawer</div>;
function CompanyDashboard(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('View Jobs');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

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
              Company Dashboard
            </Typography>
          </Toolbar>
        </Hidden>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
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
        <Switch>
          <Route path='/student-dashboard' exact>
            <ViewJobs />
          </Route>
          <Route path='/student-dashboard/view-jobs'>
            <Redirect to='/student-dashboard' />
          </Route>
          <Route path='/student-dashboard/view-offers'>
            <ViewOffers />
          </Route>
          <Route path='/student-dashboard/application-status'>
            <ApplicationStatus />
          </Route>
          <Route path='/student-dashboard/upload-resume'>
            <UploadResume />
          </Route>
          <Route path='/student-dashboard/profile-details'>
            <StudentProfile />
          </Route>
        </Switch>
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

export default CompanyDashboard;
