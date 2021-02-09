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
  Box,
} from '@material-ui/core';
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ViewJobCard from '../../components/ViewJobCard';
import { Route, useHistory } from 'react-router-dom';
import ViewJobs from './ViewJobs';

interface Props {
  window?: () => Window;
}
function StudentDashboard(props: Props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('View Jobs');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        height: '100%',
        color: theme.palette.primary.contrastText,
      }}
    >
      {/* <List>
        <ListItem button key='dp'>
          <ListItemIcon>
            <Avatar
              alt='Remy Sharp'
              className={classes.large}
              src={
                'https://randomuser.me/api/portraits/women/' +
                Math.floor(Math.random() * 100) +
                '.jpg'
              }
            />
          </ListItemIcon>
          <Typography variant='h6' noWrap style={{ padding: '1rem' }}>
            Jessie Doe
          </Typography>
        </ListItem>
      </List> */}
      <Box p={2} display='flex' alignItems='center'>
        <Avatar
          alt='Remy Sharp'
          className={classes.large}
          src={
            'https://randomuser.me/api/portraits/women/' + Math.floor(Math.random() * 100) + '.jpg'
          }
        />
        <Typography variant='h6' noWrap style={{ padding: '1rem', fontFamily: 'Playfair Display' }}>
          Jessie Doe
        </Typography>
      </Box>
      <Divider />
      <List>
        {['View Jobs', 'View Offers', 'Application Status', 'Upload Resume'].map((text) => (
          <ListItem
            button
            key={text}
            className={classes.select}
            onClick={() => {
              setSelectedTab(text);
              history.replace('/student-dashboard');
            }}
            selected={text === selectedTab}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
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
        <Route path='/student-dashboard' exact>
          <ViewJobs />
        </Route>
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
