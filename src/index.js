import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);
