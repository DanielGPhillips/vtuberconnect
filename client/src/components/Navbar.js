//React Import
import * as React from 'react';
import {Link} from 'react-router-dom';
// MUI Import
import { createTheme, useTheme, styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import SvgIcon from '@mui/material/SvgIcon';
//Asset Import
import VyLogo from '../props/VyLogo';
import Auth from '../utils/auth';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function NavbarCombo() {
  let theme = createTheme ({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff6800',
      },
      secondary: {
        main: '#FFB27E',
      },
      error: {
        main: '#f44336',
      },
    },
  });
  
  theme = useTheme();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  }; 

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose} component= { Link } to="/">Home</MenuItem>
      <MenuItem onClick={handleMenuClose} component= { Link } to="/:userId">Profile</MenuItem>
      <MenuItem onClick={handleMenuClose} component= { Link } to="/account">My account</MenuItem>
      <MenuItem onClick={handleMenuClose} component= { Link } to="/signout">Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label='home' color='inherit' component= { Link } to="/">
          <SvgIcon>
            <VyLogo/>
          </SvgIcon>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 2 new mails" color="inherit" component= { Link } to="/messages">
          <Badge badgeContent={2} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          component= { Link } 
          to="/notifcations"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  function getUser() {
    if (Auth.loggedIn()) {
      const user = Auth.getProfile().data
      return user;
    }
  }
  const user = getUser()

  return (
    <Box color='primary' sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} enableColorOnDark>
        <Toolbar color="primary">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Vycelium Icon"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <SvgIcon color='white'>
              <VyLogo />
            </SvgIcon>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Vycelium
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }}/>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>            
            {Auth.loggedIn() ? (
              <>
                <IconButton size="large" aria-label='home' color='inherit' component= { Link } to="/">
                  <HomeIcon />
                </IconButton>
                <IconButton size="large" aria-label="sign in" color="inherit" component= { Link } to="/signin">
                    <MailIcon />              
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="sign up"
                  color="inherit"
                >              
                  <NotificationsIcon />
                  
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar src={user.profilePicture} alt='user avatar'/>
                </IconButton>
              </>
              ) : (
              <>
                <IconButton size="large" aria-label='home' color='inherit' component= { Link } to="/">
                  <HomeIcon />
                </IconButton>
                <Button size="large" aria-label="signup" color="inherit" component= { Link } to="/signup">
                  Sign Up
                </Button>
                <Button size="large" aria-label="signin" color="inherit" component= { Link } to="/signin">
                  Sign In
                </Button>
              </>
            )}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};