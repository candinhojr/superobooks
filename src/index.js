import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import AppTheme from './Utils/SuperoTheme'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

const applyTheme = createMuiTheme(AppTheme)

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <MuiThemeProvider theme={applyTheme}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);
