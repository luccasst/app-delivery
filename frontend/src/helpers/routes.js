import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';
import RegisterPage from '../pages/registerPage/registerPage';
import RegisterManageUsers from '../pages/RegisterManageUsers/registerManageUsers';


function Routes() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/admin/manage" component={ RegisterManageUsers } />
      </Switch>
    );
  }
  
  export default Routes;