import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    padding: '1rem'
  },
  select: {
    padding: '1rem'
  },
  list: {
    width: 250
  }
});

export default ({
  countries,
  categories,
  open,
  onClose,
  selectedCountry,
  selectedCategory,
  onCategoryClick,
  onCountryChange}) => {

  const classes = useStyles();

  return (
    <SwipeableDrawer
      disableBackdropTransition={true} open={open} onClose={onClose}>
      <Typography variant="h6" className={classes.title}>
        News Reader
      </Typography>

      <Divider/>

      <div className={classes.select}>
        <FormControl variant="outlined" fullWidth={true}>
          <InputLabel>Country</InputLabel>
          <Select defaultValue={selectedCountry} onChange={onCountryChange}>
            {countries.map((item, index) => (
              <MenuItem key={item} value={index}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Divider/>

      <div className={classes.list}>
        <List>
          {categories.map((item, index) => (
            <ListItem
              button
              key={index}
              selected={selectedCategory === index ? true : false}
              onClick={() => onCategoryClick && onCategoryClick(index)}>
              <Typography variant="subtitle2">
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
}
