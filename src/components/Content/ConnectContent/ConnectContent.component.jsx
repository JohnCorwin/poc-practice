import React from "react";

import connectChat from "../../../assets/images/connectchat.svg";
import connectFeed from "../../../assets/images/connectfeed.svg";

const ConnectContent = () => {
  return (
    <div className="stuff">
      <h1>Connect</h1>
      <p>Connections for Chinese students during the Fall 2021 Hopkins Global Semester.</p>
      <div className="cards">
        <div className="card">
          <img src={connectChat} alt="connectChat"></img>
        </div>
        <div className="card">
          <img src={connectFeed} alt="connectFeed"></img>
        </div>
      </div>
    </div>
  );
}

export default ConnectContent;