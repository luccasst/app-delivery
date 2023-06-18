import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';
import RegisterPage from '../pages/registerPage/registerPage';
import RegisterManageUsers from '../pages/registerManageUsers/registerManageUsers';
import CustomerProducts from '../pages/CustomerProducts/customerProducts';
import SellerPage from '../pages/sellerOrders/sellerOrdersPage';


function Routes() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/customer/products" component={ CustomerProducts } />
        <Route exact path="/admin/manage" component={ RegisterManageUsers } />
        <Route exact path="/seller/orders" component={ SellerPage } />
      </Switch>
    );
  }
  
  export default Routes;