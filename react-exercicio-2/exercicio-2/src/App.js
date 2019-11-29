import React from 'react';
import Home from './pages/Home'
import Login from './pages/Login';
import Produtos from './pages/Produtos'
import Usuarios from './pages/Usuarios'
import Repos from './pages/Repos'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
function App() {


  return (
    <BrowserRouter>

      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
        <Route path='/produtos' component={Produtos} />
        <Route path='/usuarios' component={Usuarios} />
        <Route path='/repos' component={Repos} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;
