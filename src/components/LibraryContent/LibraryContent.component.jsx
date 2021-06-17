import React from "react";

import library from "../../assets/images/library.svg";

const ConnectContent = () => {
  return (
    <div className="stuff">
      <h1>Connect</h1>
      <p>Content available to Chinese students for the Hopkins Global program in Fall 2021.</p>
      <div className="card">
        <img src={library}></img>
      </div>
    </div>
  );
}

export default ConnectContent;