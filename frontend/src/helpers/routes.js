import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';
import RegisterPage from '../pages/registerPage/registerPage';
import RegisterManageUsers from '../pages/registerManageUsers/registerManageUsers';
import CustomerProducts from '../pages/CustomerProducts/customerProducts';
import CustomerOrder from '../pages/customerOrderPage/customerOrderPage';
import CustomerCheckout from '../pages/CustomerCheckout/customerCheckout';
import SellerPage from '../pages/sellerOrders/sellerOrdersPage';
import SellerOrdersById from '../pages/sellerOrdersById/sellerOrdersById';
import CustomerOrdersById from '../pages/customerOdersById/customerOrdersById';



function Routes() {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/register" component={ RegisterPage } />
        <Route exact path="/customer/products" component={ CustomerProducts } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrdersById } />
        <Route exact path="/customer/orders" component={ CustomerOrder } />
        <Route exact path="/customer/checkout" component={ CustomerCheckout } />
        <Route exact path="/admin/manage" component={ RegisterManageUsers } />
        <Route exact path="/seller/orders" component={ SellerPage } />
        <Route exact path="/seller/orders/:id" component={ SellerOrdersById } />
      </Switch>
    );
  }
  
  export default Routes;