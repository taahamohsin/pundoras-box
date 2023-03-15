import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import App from './App';
import Admin from './Admin';
import Jokes from './Jokes';
import Menu from './Menu';
const { Header } = Layout;

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <Menu />
        </Header>
        <Route path='/' component={App} exact />
        <Route path='/admin' component={Admin} exact />
        <Route path='/jokes' component={Jokes} exact />
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;