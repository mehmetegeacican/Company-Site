import React, {Compononent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import Notifications from './components/dashboard/Notifications';
import IntroPage from './components/dashboard/IntroPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path = '/' component = {Dashboard}></Route>
          <Route path = '/project/:id' component = {ProjectDetails}></Route>
          <Route path = '/create' component = {CreateProject}></Route>
          <Route path = '/signIn' component = {SignIn}></Route>
          <Route path = '/signUp' component = {SignUp}></Route>
          <Route path = '/notifications' component = {Notifications}></Route>
          <Route path = '/intropage' component = {IntroPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
