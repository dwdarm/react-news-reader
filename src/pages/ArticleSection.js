import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ArticleFull from '../components/ArticleFull';

const ArticleSection = ({history, location, id, articles}) => {
  const article = articles[id];

  useEffect(() => {
    if (!article) {
      history.replace('/')
    }
  });

  if (!article) {
    return null;
  }

  return (
    <ArticleFull
      article={article}
      onBack={() => history.goBack()}
    />
  );
}

const mapStateToProps = state => {
  return { articles: state.articles }
}

export default connect(mapStateToProps)(ArticleSection);
