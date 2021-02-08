import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
