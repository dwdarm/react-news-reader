import React from 'react';
import { connect } from 'react-redux';
import MenuList from '../components/MenuList';
import { CATEGORIES, COUNTRIES } from '../common/consts';

const countries = Object.keys(COUNTRIES).map(key => COUNTRIES[key]);
const categories = Object.keys(CATEGORIES).map(key => CATEGORIES[key]);

const SelectorSide = ({history, location, country, category, dispatch}) => {

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
    <MenuList
      categories={categories}
      countries={countries}
      selectedCountry={Object.keys(COUNTRIES).indexOf(country)}
      selectedCategory={Object.keys(CATEGORIES).indexOf(category)}
      onCountryChange={setCountry}
      onCategoryClick={setCategory}
    />
  );
}

const mapStateToProps = state => {
  const { headlines } = state;
  const { country, category } = headlines;

  return { country, category }
}

export default connect(mapStateToProps)(SelectorSide);
