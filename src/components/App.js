import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './users/Users';

const Prueba = () => <div> Holi, tasks</div>;

const App = () => (
  <BrowserRouter>
    <Menu />
    <div className="margen">
      <Route exact path="/" component={Users} />
      <Route path="/tasks" component={Prueba} />
    </div>
  </BrowserRouter>
);

export default App;
