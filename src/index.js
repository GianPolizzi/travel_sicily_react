import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login';
import NoPage from './components/NoPage/NoPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
require('typeface-roboto');

ReactDOM.render(
  <>
  <BrowserRouter>
    <Switch>
      {(JSON.parse(window.sessionStorage.getItem('email')) !== null) ? (<Route exact path="/" component={App}/>)
      :(<Route exact path="/" component={Login}/>)}
      <Route path="**" component={NoPage}/>
    </Switch>
  </BrowserRouter></>,
  document.getElementById('root')
);


//accede al session storage se non è null ti reindirizza al path / con il componente app, altrimenti carica il componente Login, abbiamo gesito anche le route con ** indichiamo il fatto che gli altri path caricano il componente no page, per fare il routing abbiamo importato le solite cose. Session storage chiudi la tab e si perde, switch --> perche passa ai diversi path, se non matcha la prima va al resto