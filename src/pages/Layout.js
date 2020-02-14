import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SelectorDrawer from './SelectorDrawer';
import SelectorSide from './SelectorSide';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    flex: 1,
    padding: '1rem'
  }
});

const Layout = props => {
  const [ drawerOpen, setDrawerOpen ] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <NavBar onBurgerClick={() => setDrawerOpen(true)} />

      <SelectorDrawer
        open={drawerOpen}
        history={props.history}
        location={props.location}
        onClose={() => setDrawerOpen(false)}
      />

      <div className={classes.main}>
        <Container disableGutters={true}>
          <Grid container spacing={2}>
            <Hidden smDown>
              <Grid item md={3}>
                <SelectorSide
                  history={props.history}
                  location={props.location}
                />
              </Grid>
            </Hidden>
            <Grid item xs={12} md={9}>
              { props.children }
            </Grid>
          </Grid>
        </Container>
      </div>

      <Footer/>

    </div>
  );
}

export default Layout;
