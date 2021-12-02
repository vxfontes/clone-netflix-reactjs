import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/login/index';
import Home from './pages/home/index';
import HomeExemplo from './archive/exemplo-filmes';

const Routes = () => {
  const logado = localStorage.getItem('@user');

  return (
    <Router>
      <Switch>
        {!logado && <Route path="/" exact component={Login} />}
        {logado && <Route path="/" component={Home} />}
        <Route exact path="basico-react" component={HomeExemplo} />
      </Switch>
    </Router>
  );
};

export default Routes;
