import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { List, Backdrop, CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import SwitchTheme from './Header/SwitchTheme'
import { useContext } from 'react';
import Context from '../context/Context';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FunctionsIcon from '@material-ui/icons/Functions';
import { Link } from "react-router-dom";
import './styles/skeleton.css'



const drawerWidth = 144;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'var(--major-theme)',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: 'var(--major-theme)',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'var(--major-theme)',
    color: 'var(--text-theme)',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: 'var(--major-theme)',
    padding: theme.spacing(3),
    fontFamily: 'Ubuntu',
    height: '100%',
    paddingTop: '0px',
    paddingRight: '0px',
    paddingBottom: '0px',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function PermanentDrawerLeft({ children }) {
  const { backdrop } = useContext(Context)
  const classes = useStyles();
  const menuItems = [{
    name: 'Inicio',
    icon: <HomeIcon className="menu-side-bar-icon"/>,
    route: 'home'
  }, {
    name: 'Sobre',
    icon: <AccountBoxIcon className="menu-side-bar-icon"/>,
    route: 'about'
  }, {
    name: 'Projetos',
    icon: <CollectionsBookmarkIcon className="menu-side-bar-icon"/>,
    route: 'projects'
  }, {
    name: 'Contato',
    icon: <EmailIcon className="menu-side-bar-icon"/>,
    route: 'contact'
}];

const socialMediaItems = [{
  link: 'https://www.google.com/',
  icon: <GitHubIcon className='menu-side-bar-social-media-icon'/>,
}, {
  link: 'https://www.google.com/',
  icon: <LinkedInIcon className='menu-side-bar-social-media-icon'/>,
}, {
  link: 'https://www.google.com/',
  icon: <InstagramIcon className='menu-side-bar-social-media-icon'/>,
}, {
  link: 'https://www.google.com/',
  icon: <FunctionsIcon style={{transform: 'rotate(90deg)'}} className='menu-side-bar-social-media-icon'/>,
}];

  return (
    <Box className={classes.root}>
      <Backdrop className={classes.backdrop} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="menu-side-bar-toolbar">
          <Typography variant="h6" noWrap>
            {/* Anderson Turkiewicz */}
          </Typography>
          <SwitchTheme />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Box className={classes.toolbar + ' menu-side-bar-logo'} />
        <Box>
          <p className="menu-side-bar-title">Anderson Turkiewicz</p>
          <p className="menu-side-bar-slogan">Desenvolvedor Web</p>
          <Divider />
        </Box>
        <Box className='menu-side-bar-list'>
        <List >
          <Divider />
          {menuItems.map(({ name, icon, route }) => (
            <Box className='menu-side-bar-list-box'><Link to={`${route}`}>
              <ListItem button key={ name }>
                <ListItemIcon>{ icon }</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
              </Link>
              <Divider />
            </Box>
          ))}
        </List>

        </Box>
        <Box className='menu-side-bar-social-media-box'>
          {socialMediaItems.map(({ icon }) => icon)}
        </Box>
      </Drawer>

      <Box className={classes.content}>
        <Box className={classes.toolbar} />
        { children }
      </Box>
    </Box>
  );
}