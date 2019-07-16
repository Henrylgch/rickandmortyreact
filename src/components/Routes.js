import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AppPage from '../pages/AppPage';
import HomePage from '../pages/HomePage'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/app" component={AppPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;