import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  grey: {
    color: 'hsl(0, 0%, 29%)'
  },
  image: {
    width: '100%',
    margin: '1rem 0'
  }
});

export default ({article}) => {
  const classes = useStyles();

  return (
    <div>

      <Typography variant="body2" className={classes.grey}>
        {article.source.name}
      </Typography>

      <Typography variant="h5" component="h1">
        {article.title}
      </Typography>

      <Typography variant="body2" className={classes.grey}>
        Author: {article.author}
      </Typography>

      <Typography variant="body2" className={classes.grey}>
        Published: {article.publishedAt}
      </Typography>

      {article.urlToImage ?
        <img className={classes.image} src={article.urlToImage} alt={article.title}/> : null
      }

      <Typography variant="body1">
        {article.content}
      </Typography><br/><br/><br/>

      <Typography variant="body1">
        <Link href={article.url}>{article.url}</Link>
      </Typography><br/><br/>

    </div>
  );
}
