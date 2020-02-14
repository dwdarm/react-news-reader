import { combineReducers } from 'redux';
import articles from './articles';
import headlines from './headlines'

export default combineReducers({
  articles,
  headlines
})
