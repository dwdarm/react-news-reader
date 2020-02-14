import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import { Provider } from 'react-redux';
import configureStore from './store';
import Index from './pages/Index';
import Article from './pages/Article';

const store = configureStore();

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollMemory />
          <Switch>
            <Route path="/article/:id"><Article/></Route>
            <Route path="/"><Index/></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
