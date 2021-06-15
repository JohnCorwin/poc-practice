import * as React from "react";

import futureBrightLogo from './FutureBrightLogo.png';
import settingsImg from './gear.png';
import notificationsImg from './bell.png';
import profileImg from './profile.png';
import searchImg from './search-icon.png';

import "./Header.css";

const Header = () => {
  return (
    <div className="top-menu padding8 flexed justify-start">
  		<h1 className="brand margin0 inline-blocked"><a href="/" ><img src={futureBrightLogo} alt="FutureBright"></img></a></h1>
  		<form className="search-wrapper">
  			<input type="text" className="search-input" placeholder="search..."></input>
  		    <button type="submit"><img src={searchImg} alt="Search"></img></button>
  		</form>
  		<nav className="inline-blocked">
  			<a href="/settings" className="menu-item padding8">
  				<img src={settingsImg} alt="Settings"></img>
  			</a>
  			<a href="/notifications" className="menu-item padding8">
  				<img src={notificationsImg} alt="Notifications"></img>
  			</a>
  			<a href="/profile" className="menu-item padding8">
  				<img src={profileImg} alt="Profile"></img>
  			</a>
  		</nav>
  	</div>
  );
}

export default Header;
