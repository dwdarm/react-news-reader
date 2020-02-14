import buildUrl from 'build-url';
import hash from 'object-hash';
import { BASE_URL, API_KEY } from './config';

export const fetchHeadlines = queryParams => {
  return dispatch => {
    const payload = {
      country: queryParams.country || 'us',
      category: queryParams.category || 'general'
    }

    dispatch({ type: 'FETCH_HEADLINES', payload });

    fetch(buildUrl(`${BASE_URL}/top-headlines`, {
      queryParams: {
        apiKey: API_KEY,
        ...queryParams
      }
    }))
    .then(res => res.json())
    .then(json => dispatch({
      type: 'ADD_HEADLINES',
      payload: {
        articles: json.articles.map(item => ({
          ...item,
          hash: hash.MD5(item.title)
        })),
        ...payload
      }
    }))
  }

}
