import React from 'react';
import { useHistory, useLocation, } from "react-router-dom";
import Layout from './Layout';
import News from './News';

const Index = props => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Layout history={history} location={location} >
      <News history={history} />
    </Layout>
  );
}

export default Index;
