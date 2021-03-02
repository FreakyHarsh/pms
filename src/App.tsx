import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard/StudentDashboard';
import CompanyDashboard from './pages/CompanyDashboard/CompanyDashboard';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import { useDispatch } from 'react-redux';
import { authStart } from './store/actions/actions.auth';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authStart());
  }, []);
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
        <Route path='/company-dashboard'>
          <CompanyDashboard />
        </Route>
        <Route path='/admin-dashboard'>
          <AdminDashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
