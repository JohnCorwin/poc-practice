import * as React from "react";

import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import icons from "../../assets/images/icons.svg";

import "../../css/components/home.scss";

const Home = () => {
  return (
    <main className="home">
      <img src={logo}></img>
      <img src={search}></img>
      <img src={icons}></img>
    </section>
  )
}

export default Home;
