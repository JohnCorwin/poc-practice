import React from "react";

import library from "../../../assets/images/library.svg";

const ConnectContent = () => {
  return (
    <div className="stuff">
      <h1 className="page-title">Connect</h1>
      <p className="page-subtitle">Content available to Chinese students for the Hopkins Global program in Fall 2021.</p>
      <div className="card">
        <img src={library} alt="library"></img>
      </div>
    </div>
  );
}

export default ConnectContent;