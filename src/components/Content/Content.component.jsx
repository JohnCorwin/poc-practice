import './Content.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Campaigns from '../Campaigns/Campaigns.component';
import EnrollmentCriteria from '../EnrollmentCriteria/EnrollmentCriteria.component';
import Connect from '../Connect/Connect.component';
import Discover from '../Discover/Discover.component';
import Library from '../Library/Library.component';
import Students from '../Students/Students.component';
import SocialTools from '../SocialTools/SocialTools.component';
import Analytics from '../Analytics/Analytics.component';

const Content = () => {
  return (
    <section className="primary">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Campaigns />
          </Route>
          <Route path="/criteria">
            <EnrollmentCriteria />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/discover">
            <Discover />
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
          <Route path="/socialtool">
            <SocialTools />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
        </Switch>
      </Router>
    </section>
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
