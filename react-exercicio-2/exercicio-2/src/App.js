import React from 'react';
import Home from './pages/Home'
import './App.css';
import Login from './pages/Login';
import Produtos from './pages/Produtos'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/produtos' component={Produtos} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
