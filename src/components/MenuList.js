import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  list: {
    width: '100%'
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
  onCountryChange }) => {

  const classes = useStyles();

  return (
    <div className={classes.list}>

      <FormControl variant="outlined" fullWidth={true}>
        <InputLabel>Country</InputLabel>
        <Select defaultValue={selectedCountry} onChange={onCountryChange}>
          {countries.map((item, index) => (
            <MenuItem key={item} value={index}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <List>
        {categories.map((item, index) => (
          <ListItem
            button
            key={index}
            selected={selectedCategory === index ? true : false}
            onClick={() => onCategoryClick && onCategoryClick(index)}>
            <Typography variant="subtitle1">
              {item}
            </Typography>
          </ListItem>
        ))}
      </List>

    </div>
  );
}
