import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Analytics from '../Pages/Analytics/Analytics.component';
import Campaigns from '../Pages/Campaigns/Campaigns.component';
import Connect from '../Pages/Connect/Connect.component';
import Discover from '../Pages/Discover/Discover.component';
import EnrollmentCriteria from '../Pages/EnrollmentCriteria/EnrollmentCriteria.component';
import Library from '../Pages/Library/Library.component';
import SocialTools from '../Pages/SocialTools/SocialTools.component';
import Students from '../Pages/Students/Students.component';

const ContentRouter = () => {
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

export default ContentRouter;
