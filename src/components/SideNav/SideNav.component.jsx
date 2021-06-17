import * as React from "react";

import hopkinsLogo from "../../assets/images/hopkinslogo.svg";

import "../../css/components/sidenav.scss";
import "../../css/baseline/project.scss";
import "../../css/baseline/reset.scss";

const SideNav = () => {
  return (
    <section className="side-nav">
      <img src={hopkinsLogo} alt="hopkinsLogo"></img>
      <h5>Recruitment</h5>
      <ul>
        <li><a href="/home">Campaigns</a></li>
        <li><a href="/discover">Discover</a></li>
        <li><a href="/socialtool">Social Tools</a></li>
        <li><a href="/criteria">Criteria</a></li>
      </ul>
      <h5>Engagement</h5>
      <ul>
        <li><a href="/connect">Connect</a></li>
        <li><a href="/library">Library</a></li>
        <li><a href="/analytics">Analytics</a></li>
      </ul>
      <h5>Enrollment</h5>
      <ul>
        <li><a href="/students">Students</a></li>
      </ul>
    </section>
  );
}

export default SideNav;
