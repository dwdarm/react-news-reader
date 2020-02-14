import React from 'react';
import { connect } from 'react-redux';
import Drawer from '../components/Drawer';
import { CATEGORIES, COUNTRIES } from '../common/consts';

const countries = Object.keys(COUNTRIES).map(key => COUNTRIES[key]);
const categories = Object.keys(CATEGORIES).map(key => CATEGORIES[key]);

const SelectorSide = ({history, location, open, country, category, dispatch, onClose}) => {

  const setCountry = event => {
    dispatch({
      type: 'SET_COUNTRY',
      payload: {
        country: Object.keys(COUNTRIES)[parseInt(event.target.value)]
      }
    });

    if (location.pathname !== '/') {
      history.push('/')
    }
  }

  const setCategory = index => {
    dispatch({
      type: 'SET_CATEGORY',
      payload: {
        category: Object.keys(CATEGORIES)[parseInt(index)]
      }
    });

    if (location.pathname !== '/') {
      history.push('/')
    }
  }

  return (
    <Drawer
      open={open}
      countries={countries}
      categories={categories}
      selectedCountry={Object.keys(COUNTRIES).indexOf(country)}
      selectedCategory={Object.keys(CATEGORIES).indexOf(category)}
      onCountryChange={setCountry}
      onCategoryClick={setCategory}
      onClose={onClose}
    />
  );
}

const mapStateToProps = state => {
  const { headlines } = state;
  const { country, category } = headlines;

  return { country, category }
}

export default connect(mapStateToProps)(SelectorSide);
