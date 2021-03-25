import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import CompanyDashboard from "./pages/CompanyDashboard/CompanyDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import { authStart } from "./store/actions/actions.auth";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authStart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
