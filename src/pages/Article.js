import React from 'react';
import { useHistory, useLocation, useParams } from "react-router-dom";
import Layout from './Layout';
import ArticleSection from './ArticleSection';

const Article = props => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  return (
    <Layout history={history} location={location} >
      <ArticleSection history={history} location={location} id={id} />
    </Layout>
  );
}

export default Article;
