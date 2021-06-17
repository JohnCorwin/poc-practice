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

export default Content;
