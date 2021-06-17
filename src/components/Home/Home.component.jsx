import * as React from "react";

import SideNav from '../SideNav/SideNav.component';
import ContentRouter from '../ContentRouter/ContentRouter.component';

import "../../css/components/home.scss";

const Home = () => {
  var href = window.location.href

  var page = href.length > 22 ? href.substring(22) : "home";

  return (
    <main className={page}>
      <SideNav />
      <ContentRouter />
    </main>
  )
}

export default Home;
