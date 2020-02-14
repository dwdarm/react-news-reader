const transform = (data, key) => {
  return data.reduce((accumulator, currentValue) => {
    return {
      ...accumulator,
      [currentValue[key]]: currentValue
    }
  }, {});
}

const articles = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_HEADLINES':
      return {
        ...transform(action.payload.articles, 'hash'),
        ...state
      }
    default:
      return state;
  }
}

export default articles;
