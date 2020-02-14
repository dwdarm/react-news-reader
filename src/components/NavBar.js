import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = ({onBurgerClick}) => {
  return (
    <>
      <AppBar position="fixed">
        <Container disableGutters={true}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={onBurgerClick} >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6">
              News Reader
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default NavBar;
