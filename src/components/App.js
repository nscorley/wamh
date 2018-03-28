/**
 * Main site entrypoint
 * Renders all subsequent components
 */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainWebsite from './MainWebsite';

const App = () => (
  // TODO: set 404 fallback
  <BrowserRouter>
    {/* Framework for admin page */}
    <Switch>
      <Route path="*" component={MainWebsite} />
    </Switch>
  </BrowserRouter>
);

export default App;
