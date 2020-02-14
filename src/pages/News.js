import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHeadlines } from '../store/actions/headlines';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArticlesList from '../components/ArticlesList';

const useStyles = makeStyles({
  wrapper: {
    flex: 1,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  }
});

const News = ({
  history, country, category, articles, loading, hasMore, page, dispatch}) => {
  const classes = useStyles();

  const loadNews = () => dispatch(fetchHeadlines({ country, category, page }));

  useEffect(() => {
    if (!loading && hasMore && articles.length === 0) {
      loadNews();
    }
  });

  if (articles.length === 0) {
    return (
      <div className={classes.wrapper} >
        <CircularProgress />
      </div>
    );
  }

  return (
    <ArticlesList
      articles={articles}
      hasMore={hasMore}
      loading={loading}
      onItemClick={data => history.push(`/article/${data}`)}
      onLoadMore={loadNews}
    />
  );
}

const mapStateToProps = state => {
  const { headlines, articles } = state;
  const { country, category } = headlines;
  const headlinesByCountry = headlines.headlines[country] || {}
  const headlinesByCategory = headlinesByCountry[category] || {
    articles: [],
    page: 1,
    hasMore: true,
    loading: false
  }

  return {
    country,
    category,
    ...headlinesByCategory,
    articles: headlinesByCategory.articles.map(item => articles[item])
  }
}

export default connect(mapStateToProps)(News);
