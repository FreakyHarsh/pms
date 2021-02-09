import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
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
        <Route path='/student-dashboard'>
          <StudentDashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
