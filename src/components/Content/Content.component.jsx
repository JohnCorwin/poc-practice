import './Content.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Campaigns from '../Campaigns/Campaigns.component';
import Criteria from '../Criteria/Criteria.component';
import Connect from '../Connect/Connect.component';
import Library from '../Library/Library.component';
import Students from '../Students/Students.component';

const Content = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/campaigns">
          <Campaigns />
        </Route>
        <Route path="/criteria">
          <Criteria />
        </Route>
        <Route path="/connect">
          <Connect />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/students">
          <Students />
        </Route>
      </Switch>
    </Router>
  );

}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h2>Notifications</h2>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}

export default Content;
