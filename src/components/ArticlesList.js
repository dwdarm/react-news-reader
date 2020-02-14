import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  grey: {
    color: 'hsl(0, 0%, 48%)'
  }
});

const ArticlePreview = ({article, onClick}) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea onClick={() => onClick && onClick(article.hash)}>
        <CardContent>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item style={{flex:1}}>
              <Typography variant="body2" className={classes.grey}>
                {article.source.name}
              </Typography>
              <Typography variant="h6" component="h2">
                {article.title}
              </Typography><br/>
              <Typography variant="body2" className={classes.grey}>
                {article.publishedAt}
              </Typography>
            </Grid>
            {article.urlToImage ?
              <Grid>
                <Hidden xsDown>
                  <div style={{
                    width: 128,
                    height: 128,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${article.urlToImage})`
                  }} />
                </Hidden>
              </Grid> : null
            }
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ({articles, hasMore, loading, onLoadMore, onItemClick}) => (
  <Grid container direction={'column'} spacing={2}>

    {articles.map(item => (
      <Grid item key={item.hash}>
        <ArticlePreview article={item} onClick={onItemClick}/>
      </Grid>
    ))}

    {hasMore === true ?
      <Grid item key={0}>

        <Grid container justify="center">
          <Grid item>
            {loading === true ?
              <CircularProgress /> :
              <Card>
                <CardActionArea onClick={onLoadMore}>
                  <CardContent>
                    <Typography variant="body2" align="center">
                      Load More
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            }
          </Grid>
        </Grid>
      </Grid> : null
    }

  </Grid>
);
