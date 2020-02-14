import { combineReducers } from 'redux';

const country = (state = 'us', action) => {
  switch (action.type) {
    case 'SET_COUNTRY':
      return action.payload.country;
    default:
      return state;
  }
}

const category = (state = 'general', action) => {
  switch (action.type) {
    case 'SET_CATEGORY':
      return action.payload.category;
    default:
      return state;
  }
}

const defaultHeadlines = {
  articles: [],
  page: 1,
  hasMore: true,
  loading: false,
}

const headlines = (state = defaultHeadlines, action) => {
  switch (action.type) {
    case 'ADD_HEADLINES':
      return {
        articles: state.articles.concat(action.payload.articles.map(item => item.hash)),
        page: state.page + 1,
        loading: false,
        hasMore: action.payload.articles.length > 0 ? true : false
      }
    case 'FETCH_HEADLINES':
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}

const headlinesByCategory = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HEADLINES':
    case 'FETCH_HEADLINES':
      return {
        ...state,
        [action.payload.category]: headlines(state[action.payload.category], action)
      }
    default:
      return state;
  }
}

const headlinesByCountry = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HEADLINES':
    case 'FETCH_HEADLINES':
      return {
        ...state,
        [action.payload.country]: headlinesByCategory(state[action.payload.country], action)
      }
    default:
      return state;
  }
}

export default combineReducers({
  headlines: headlinesByCountry,
  country,
  category
});
