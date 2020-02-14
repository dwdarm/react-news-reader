import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'hsl(0, 0%, 86%)',
    padding: '1rem'
  },
  text: {
    color: 'hsl(0, 0%, 29%)'
  }
});

export default () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container disableGutters={true}>
        <Typography variant="body2" className={classes.text}>
          Made with ♥ in Tangerang, Indonesia
        </Typography>
      </Container>
    </footer>
  );
}
