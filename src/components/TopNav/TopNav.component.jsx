import * as React from "react";

import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import icons from "../../assets/images/icons.svg";

import "../../css/components/navigation.scss";

const TopNav = () => {
  return (
    <section className="top-nav">
      <img src={logo} alt="logo"></img>
      <img src={search} alt="search"></img>
      <img src={icons} alt="icons"></img>
    </section>
  )
}

export default TopNav;
